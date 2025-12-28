// onboarding.js
import { auth, db } from "./firebase.js";
import {
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("profileForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const branch = document.getElementById("branch").value;

  const user = auth.currentUser;
  if (!user) return;

  await updateDoc(doc(db, "users", user.uid), {
    name,
    branch
  });

  // after completing profile → home
  window.location.replace("index.html");
});

