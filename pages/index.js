import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Object from "./Object";
import TodoList from "./TodoList";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="signInDiv">
        <p className="signIn">Signed in as {session.user.email}</p> <br />
        <button className="logIn" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="signInDiv">
      <p className="signIn">Not signed in </p> <br />
      <button className="logIn" onClick={() => signIn()}>
        Sign in
      </button>
      <TodoList />
    </div>
  );
}
