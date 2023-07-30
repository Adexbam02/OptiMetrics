import { useForm, ValidationError } from "@formspree/react";
import "../components/cta.css";
const CTA = () => {
  const [state, handleSubmit] = useForm("xvojzkke");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="contactSection">
      <div className="container contactContainer">
        <div className="contact">
          {state.succeeded ? (
            <p>Thanks for joining!</p>
          ) : (
            <>
              <h2>Seize the Data Advantage: Take Action Now for Success!</h2>
              <form className="inputInfo" onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your email address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  className="emailBtn greenBtn"
                  disabled={state.submitting}
                >
                  Start now
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
