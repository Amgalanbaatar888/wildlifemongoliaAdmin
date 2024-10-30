"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModel } from "@/hooks/use-store-model";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

const forSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModel();

  const form = useForm<z.infer<typeof forSchema>>({
    resolver: zodResolver(forSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof forSchema>) => {
    //TODO create Store
    console.log(values);
  };

  return (
    <Modal
      isOpen={storeModal.isOpen}
      title="create Store"
      description="Add a new store"
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Wildlife Mongolia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <div className="pt-6 space-x-2 flex items-cneter justify-end">
                <Button variant="outline" onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button type="submit">Continue1</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
