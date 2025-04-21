import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  async function share(prevState, formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    let errors = [];

    if (title.trim().length < 5) {
      errors.push("Title must be a least five characters long.");
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("body length check");
    }

    if (!userName.trim()) {
      errors.push("useName  check");
    }

    if (errors.length > 0) {
      return { errors, enterdValues: { title, body, userName } };
    }
    try {
      await addOpinion({
        title,
        body,
        userName,
      });
    } catch (error) {}

    return { errors: null };
  }
  const [formState, formAction, pending] = useActionState(share, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enterdValues?.userName}
            />
          </p>
          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enterdValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enterdValues?.body}
          ></textarea>
        </p>
        {formState.errors && (
          <ul className="error">
            {formState.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p className="actions">
          <Submit />
        </p>
      </form>
    </div>
  );
}
