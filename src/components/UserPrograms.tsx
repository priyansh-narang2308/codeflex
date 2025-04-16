/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChevronRight,
    Dumbbell,
    Sparkles,
    Users,
    Clock,
    AppleIcon,
    ShieldIcon,
} from "lucide-react";
import { USER_PROGRAMS } from "@/constants";

const UserPrograms = () => {
    return (
        <div className="w-full pb-32 pt-20 relative bg-background/70">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="bg-card/90 backdrop-blur-lg border border-border rounded-2xl overflow-hidden mb-20 shadow-lg animate-fade-in">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-base text-primary font-semibold tracking-wide">
                                AI Program Gallery
                            </span>
                        </div>
                        <div className="text-sm text-muted-foreground">Top User Protocols</div>
                    </div>

                    <div className="p-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground">
                            Precision-Forged <span className="text-primary">AI Workouts</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                            Discover optimized fitness blueprints engineered by our AI for real users like you.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-12 mt-12 font-mono">
                            <div className="flex flex-col items-center">
                                <p className="text-4xl text-primary font-bold">1000+</p>
                                <p className="text-xs text-muted-foreground uppercase mt-1 tracking-widest">
                                    Deployments
                                </p>
                            </div>
                            <div className="w-px h-10 bg-border"></div>
                            <div className="flex flex-col items-center">
                                <p className="text-4xl text-primary font-bold">2 min</p>
                                <p className="text-xs text-muted-foreground uppercase mt-1 tracking-widest">
                                    Creation Speed
                                </p>
                            </div>
                            <div className="w-px h-10 bg-border"></div>
                            <div className="flex flex-col items-center">
                                <p className="text-4xl text-primary font-bold">96%</p>
                                <p className="text-xs text-muted-foreground uppercase mt-1 tracking-widest">
                                    Tailored Precision
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 animate-fade-in-up">
                    {USER_PROGRAMS.map((program) => (
                        <Card
                            key={program.id}
                            className="bg-card/90 backdrop-blur-lg border border-border hover:border-primary/60 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl"
                        >
                            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/80">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-sm text-primary font-medium">
                                        USER.{program.id}
                                    </span>
                                </div>
                                <div className="text-xs text-muted-foreground font-mono">
                                    {program.fitness_level.toUpperCase()}
                                </div>
                            </div>

                            <CardHeader className="pt-6 px-5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-16 w-16 rounded-full overflow-hidden border border-border">
                                        <img
                                            src={program.profilePic}
                                            alt={`${program.first_name}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg text-foreground">
                                            {program.first_name}
                                            <span className="text-primary">.exe</span>
                                        </CardTitle>
                                        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                            <Users className="h-4 w-4" />
                                            {program.age}y • {program.workout_days}d/week
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center gap-4">
                                    <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-xs text-primary flex items-center gap-2">
                                        <Sparkles className="h-4 w-4" />
                                        {program.fitness_goal}
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                                        <Clock className="h-4 w-4" /> v3.5
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="px-5">
                                <div className="space-y-4 pt-2">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                                            <Dumbbell className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-foreground">
                                                {program.workout_plan.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {program.equipment_access}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-md bg-secondary/10 text-secondary">
                                            <AppleIcon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-foreground">
                                                {program.diet_plan.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                System-optimized diet matrix
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-md bg-primary/10 text-primary">
                                            <ShieldIcon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-foreground">AI Safety Protocols</h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Autonomous protection systems online
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-border text-sm text-muted-foreground">
                                    <span className="text-primary">&gt; </span>
                                    {program.workout_plan.description.substring(0, 120)}...
                                </div>
                            </CardContent>

                            <CardFooter className="px-5 py-4 border-t border-border">
                                <Link href={`/programs/${program.id}`} className="w-full">
                                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                                        View Details
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-24 text-center animate-fade-in">
                    <Link href="/generate-program">
                        <Button
                            size="lg"
                            className="bg-gradient-to-tr from-primary to-primary/80 text-black px-10 py-6 text-lg shadow-xl hover:scale-105 transition-transform"
                        >
                            Generate My AI Program
                            <Sparkles className="ml-3 h-5 w-5" />
                        </Button>
                    </Link>
                    <p className="text-muted-foreground mt-4 text-sm">
                        Become part of 1000+ users shaping the future of fitness with AI
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserPrograms;