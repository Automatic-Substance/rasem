"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import cn from "classnames";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { encodeToString } from "@/lib/utils";
import { useState } from "react";

const formSchema = z.object({
  "form-name": z.string().min(2, {
    message: "Form name must be at least 2 characters.",
  }),
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  subjectline: z.string().min(2, {
    message: "Subject line must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "contact",
      fullname: "",
      subjectline: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const body = encodeToString({
      ...values,
    });

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    })
      .then(() => {
        setHasSubmitted(true);
        form.reset({
          fullname: "",
          subjectline: "",
          email: "",
          message: "",
        });
        setTimeout(() => setHasSubmitted(false), 5000);
      })
      .catch((error) => {});
  }

  const inputClasses = cn(
    "font-heading uppercase border-b-[0.5px] text-sm tracking-widest placeholder-white/40 focus:placeholder-white/0 placeholder:font-heading placeholder:uppercase placeholder:text-sm placeholder:tracking-widest bg-transparent focus-visible:outline-none resize-none"
  );

  const textareaClasses = cn(
    "border-b-[0.5px] text-sm uppercase placeholder:capitalize tracking-widest placeholder-white/40 focus:placeholder-white/0 placeholder:font-heading placeholder:text-sm bg-transparent focus-visible:outline-none resize-none",
    "h-[140px] border-t-[0.5px] font-heading placeholder:font-body placeholder:text-lg placeholder:italic"
  );

  return (
    <Form {...form}>
      <form
        name="contact"
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-7"
      >
        <FormField
          control={form.control}
          name="form-name"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input
                  placeholder="Full name"
                  className={inputClasses}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input
                  placeholder="Email"
                  className={inputClasses}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subjectline"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormControl>
                <Input
                  placeholder="Subject Line"
                  className={inputClasses}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormControl>
                <div>
                  <div className="font-heading uppercase text-white/40 tracking-widest mb-2 text-sm">
                    Message
                  </div>
                  <Textarea
                    placeholder="Write your message here"
                    className={textareaClasses}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        {hasSubmitted && (
          <div className="font-heading uppercase text-white tracking-widest mb-2 text-sm">
            Thank you
          </div>
        )}
        <Button
          type="submit"
          className="lg:mt-6 hover:bg-background/20 col-span-2 col-start-2 lg:col-start-1"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
