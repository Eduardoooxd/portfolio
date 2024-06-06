'use client';
import { contactFormAction } from '@/actions/contactFormAction';
import { Button } from '@/components/shared/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/shared/form';
import { Input } from '@/components/shared/input';
import { Textarea } from '@/components/shared/textarea';
import { ContactFormSchema, ContactFormType } from '@/domain/contactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useToast } from './shared/use-toast';

export default function ContactSectionForm() {
  const [_, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    startTransition(async () => {
      const { error } = await contactFormAction(data);

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
        return;
      }

      toast({
        title: 'Email sent successfully!',
        description: 'Thank you for reaching out. I will get back to you as soon as possible.',
      });
      form.reset();
    });
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ContactSectionSubmitButton />
      </form>
    </Form>
  );
}

function ContactSectionSubmitButton() {
  const { pending } = useFormStatus();
  // TODO FIX THIS

  return (
    <Button
      className="group inline-flex w-fit gap-1 rounded-full px-6 hover:scale-105 focus:scale-105 active:scale-100"
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"> caralho</div>
      ) : (
        <>
          <span className="items-center justify-center font-medium">Submit</span>

          <Send
            size="1rem"
            className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </>
      )}
    </Button>
  );
}
