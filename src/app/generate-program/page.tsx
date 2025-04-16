"use client"

import { vapiFlow } from '@/lib/vapi'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const GenerateProgramPage = () => {

  const [callActive, setCallActive] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [messages, setMessages] = useState([])  //the captions that we speak
  const [callEnded, setCallEnded] = useState(false)  //after call endded take to the home screen or profile screen

  const { user } = useUser()
  const router = useRouter()

  const messageContainerRef = useRef<HTMLDivElement>(null);


  // meeting ahs ended error soltuin

  useEffect(() => {
    const originalError = console.error;
    // override console.error to ignore "Meeting has ended" errors
    console.error = function (msg, ...args) {
      if (
        msg &&
        (msg.includes("Meeting has ended") ||
          (args[0] && args[0].toString().includes("Meeting has ended")))
      ) {
        console.log("Ignoring known error: Meeting has ended");
        return; // don't pass to original handler
      }

      // pass all other errors to the original handler
      return originalError.call(console, msg, ...args);
    };

    // restore original handler on unmount
    return () => {
      console.error = originalError;
    };
  }, []);


  // to autoscroll the messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
    }
  }, [messages])

  // to naviagete the user to the profuile page

  useEffect(() => {
    if (callEnded) {
      const redirectedTimer = setTimeout(() => {
        router.push("/profile")
      }, 1500)

      return () => clearTimeout(redirectedTimer);

    }
  }, [callEnded, router])


  // event listeners for vapi
  useEffect(() => {

    const handleCallStart = () => {
      console.log("Call has been Started!")
      setConnecting(false)
      setCallActive(true)
      setCallEnded(false)  //it has just started
    }

    const handleCallEnd = () => {
      console.log("Call has been ended!")
      setCallActive(false)
      setConnecting(false)
      setIsSpeaking(false)
      setCallEnded(true)
    }

    const handleSpeechStart = () => {
      console.log("AI has started speeking its words")
      setIsSpeaking(true)
    }

    const handleSpeechEnd = () => {
      console.log("AI has stopped speeking its words")
      setIsSpeaking(false)
    }

    const handleMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { content: message.transcript, role: message.role };
        setMessages((prev) => [...prev, newMessage]);
      }
    };


    const handleError = (error: undefined) => {
      console.log("Vapi Error", error);
      setConnecting(false);
      setCallActive(false);
    };


    vapiFlow.on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage) //to chck the mesages
      .on("error", handleError);

    // to return all clean up listeners unmount
    return () => {
      vapiFlow
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, [])



  const toggleCall = async () => {

    // if the person is speaking stop the call button
    if (callActive) vapiFlow.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

        const fullName = user?.firstName
          ? `${user.firstName} ${user.lastName || ""}`.trim()
          : "Hey There"; //not possible

        await vapiFlow.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
          variableValues: {
            full_name: fullName,
            // user_id: user?.id, //TODO:LATER TO BE DONE
          },
        });
      } catch (error) {
        console.log("Failed to start call", error);
        setConnecting(false);
      }
    }
  };

  return (
    <div>GenerateProgramPage</div>
  )
}

export default GenerateProgramPage