"use client";

import { db } from "@/lib/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

export function useAdmins() {
  const { data, error } = useSWRSubscription(["admins"], ([path], { next }) => {
    const ref = collection(db, path);
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const adminData =
          snapshot.empty ? null : snapshot.docs.map((snap) => snap.data());
        next(null, adminData);
      },
      (err) => next(err, null)
    );

    return () => unsubscribe();
  });

  return { data, error: error?.message || null, isLoading: data === undefined };
}

export function useAdmin({ email } = {}) {
  if (!email) {
    return { data: null, error: "Email is required", isLoading: false };
  }

  const { data, error } = useSWRSubscription(
    ["admins", email],
    ([_, email], { next }) => {
      const ref = doc(db, "admins", email); // Correct Firestore doc path
      const unsubscribe = onSnapshot(
        ref,
        (snapshot) => {
          next(null, snapshot.exists() ? snapshot.data() : null);
        },
        (err) => next(err, null)
      );

      return () => unsubscribe();
    }
  );

  return { data, error: error?.message || null, isLoading: data === undefined };
}
