import React, { useState } from "react";
import { useRouter } from "next/router";
import { mailchimp } from "@/lib/mailchimp";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the email address from the form.
    const email = e.target.email.value;

    // Add the subscriber to your list.
    await mailchimp.lists.subscribe({
      list_id: process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
      email,
    });

    // Redirect the user to the success page.

    router.push("/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Subscribe;