import React from "react";
import Link from "next/link";
import Router from "next/router";
const ErrorPage = () => (
    <div>
        <h1>Oop! Something went wrong</h1>
        <p>Trying <Link href = "/auth"><a>Going Back</a></Link></p>
    </div>
)

export default ErrorPage;