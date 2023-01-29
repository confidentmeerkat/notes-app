import { Controller, useForm } from "react-hook-form";

import TagInput from "./common/TagInput";

export type NoteFormFields = {
  title: string;
  tags: Array<string>;
  content: string;
};

type FormProps = {
  initialValues?: NoteFormFields;
  onSubmit: (data: NoteFormFields) => void;
};

export default function NoteForm({ initialValues, onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, isDirty },
    reset,
  } = useForm<NoteFormFields>({ values: initialValues });

  return (
    <div className="w-full h-full bg-white rounded-xl p-8">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="flex flex-row justify-between">
          <input
            className="text-3xl text-purple-700 outline-none"
            placeholder="Title"
            {...register("title", { required: true })}
          />

          {isValid && isDirty && (
            <button type="submit" className="px-2 py-1 bg-purple-900 rounded-lg text-white">
              Save
            </button>
          )}
        </div>

        <div className="mt-6">
          <Controller
            name="tags"
            control={control}
            render={({ field: { value, onChange } }) => {
              return <TagInput value={value} onChange={onChange} />;
            }}
          />
        </div>

        <textarea
          className="flex flex-1 mt-6 outline-none h-80 resize-none w-full"
          placeholder="Add content here"
          {...register("content", { required: true })}
        />
      </form>
    </div>
  );
}
