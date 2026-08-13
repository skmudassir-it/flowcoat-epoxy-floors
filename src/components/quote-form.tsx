"use client";

import { useForm, type Path } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quoteSchema, type QuoteFormValues } from "@/lib/schema";
import { SERVICES } from "@/lib/data";

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const service = watch("service");

  const onSubmit = async (values: QuoteFormValues) => {
    const parsed = quoteSchema.safeParse(values);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        setError(issue.path[0] as Path<QuoteFormValues>, {
          type: "manual",
          message: issue.message,
        });
      }
      return;
    }
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as { success?: boolean; message?: string; error?: string };
      if (res.ok && json.success) {
        toast.success(json.message ?? "Thanks! We will be in touch within one business day.");
        reset();
      } else {
        toast.error(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          placeholder="Alex Rivera"
          className="h-12 rounded-2xl bg-white/70 backdrop-blur-xl"
          {...register("name")}
        />
        {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="alex@example.com"
          className="h-12 rounded-2xl bg-white/70 backdrop-blur-xl"
          {...register("email")}
        />
        {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(512) 555-0147"
          className="h-12 rounded-2xl bg-white/70 backdrop-blur-xl"
          {...register("phone")}
        />
        {errors.phone ? <p className="text-sm text-destructive">{errors.phone.message}</p> : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service needed</Label>
        <Select
          value={service}
          onValueChange={(value) => setValue("service", value ?? "", { shouldValidate: true })}
        >
          <SelectTrigger id="service" className="h-12 rounded-2xl bg-white/70 backdrop-blur-xl">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service ? <p className="text-sm text-destructive">{errors.service.message}</p> : null}
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Approx. square footage, current floor condition, timeline…"
          className="rounded-2xl bg-white/70 backdrop-blur-xl"
          {...register("message")}
        />
        {errors.message ? <p className="text-sm text-destructive">{errors.message.message}</p> : null}
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-full bg-linear-to-br from-primary to-accent text-white shadow-md shadow-accent/25 hover:opacity-90 hover:text-white sm:w-auto sm:px-10"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {isSubmitting ? "Sending…" : "Request My Free Quote"}
        </Button>
      </div>
    </form>
  );
}
