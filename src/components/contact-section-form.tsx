'use client';
import { contactFormAction } from '@/actions/contact-form-action';
import { Button } from '@/components/shared/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/shared/form';
import { Input } from '@/components/shared/input';
import { Textarea } from '@/components/shared/textarea';
import { ContactFormSchema, ContactFormType } from '@/domain/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from './shared/use-toast';

export default function ContactSectionForm() {
  const [isPending, startTransition] = useTransition();
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
                <Input
                  type="text"
                  placeholder="Your name"
                  {...field}
                  data-testid="contact-name-input"
                />
              </FormControl>
              <FormMessage data-testid="invalid-name-warning" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  {...field}
                  data-testid="contact-email-input"
                />
              </FormControl>
              <FormMessage data-testid="invalid-email-warning" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  {...field}
                  data-testid="contact-message-input"
                />
              </FormControl>
              <FormMessage data-testid="invalid-message-warning" />
            </FormItem>
          )}
        />

        <ContactSectionSubmitButton isPending={isPending} />
      </form>
    </Form>
  );
}

interface ContactSectionSubmitButtonProps {
  isPending: boolean;
}

function ContactSectionSubmitButton({ isPending }: ContactSectionSubmitButtonProps) {
  return (
    <Button
      disabled={isPending}
      className="group inline-flex w-fit gap-1 rounded-full px-6 hover:scale-105 focus:scale-105 active:scale-95"
      type="submit"
    >
      {isPending ? (
        <>
          Please wait
          <Loader2 data-testid="contact-section-spinner" className="mr-2 h-4 w-4 animate-spin" />
        </>
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
