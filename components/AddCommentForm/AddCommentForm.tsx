import { FC, useState } from "react";

const AddCommentForm: FC = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form className="w-full mt-12 p-4 border rounded-lg shadow-md">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name (Optional)
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your comment"
          rows={7}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={comment.length < 1}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
