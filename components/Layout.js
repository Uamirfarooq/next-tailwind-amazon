import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - amazon' : 'amazon'}</title>
        <meta name="description" content="E comeraser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold">amazona</a>
            </Link>
            <div>
              <Link legacyBehavior href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-1">{children}</main>

        <footer className=" flex h-10 justify-center items-center shadow-inner">
          CopyRight 2023 Amazon
        </footer>
      </div>
    </>
  );
}
