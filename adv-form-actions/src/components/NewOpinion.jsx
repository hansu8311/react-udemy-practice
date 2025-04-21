import { useActionState } from "react";
import { isNotEmpty } from "../util/validation";
import { OpinionsContext } from "../store/opinions-context";
import { use } from "react";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  function share(prevFormState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");
    const values = {
      userName,
      title,
      body,
    };
    if (!isNotEmpty(userName)) {
      return {
        id: "userName",
        error: "userName empty",
        values,
      };
    }
    if (!isNotEmpty(title)) {
      return {
        id: "title",
        error: "title empty",
        values,
      };
    }
    if (!isNotEmpty(body)) {
      return {
        id: "body",
        error: "body empty",
        values,
      };
    } else {
      addOpinion({
        userName,
        title,
        body,
      });
      return {
        values: {
          userName: "",
          title: "",
          body: "",
        },
      };
    }
  }
  const [formState, formAction, pending] = useActionState(share, {
    values: {
      userName: "",
      title: "",
      body: "",
    },
  });
  const { id, error, values } = formState;

  if (pending) {
    return <p>....pending</p>;
  }
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
              defaultValue={values.userName}
            />
          </p>
          {id === "userName" && error && <p className="error">{error}</p>}
          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={values.title}
            />
          </p>
          {id === "title" && error && <p className="error">{error}</p>}
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={values.body}
          ></textarea>
        </p>
        {id === "body" && error && <p className="error">{error}</p>}
        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
