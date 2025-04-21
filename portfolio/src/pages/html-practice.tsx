import React from "react";
import Image from "next/image";

export default function HTMLPractice1() {
  return (
    <div className="p-2">
      <p className="text-lg">Hello World! Welcome to my first web page!</p>
      <p className="text-lg">Here is a paragraph:</p>
      <p className="text-lg">
        This is another paragraph. A paragraph consists of one or more
        sentences. Each paragraph is shown on a new line with some space between
        it.
      </p>
      <br />
      <h1 className="text-2xl font-bold">Heading 1</h1>
      <h2 className="text-xl font-semibold">Heading 2</h2>
      <h3 className="text-lg font-medium">Heading 3</h3>
      <br />
      <h1 className="text-2xl font-bold">First level heading</h1>
      <h1 className="text-2xl font-bold">Second level heading</h1>
      <p className="text-lg">[A paragraph]</p>
      <h3 className="text-lg font-medium">Third level heading</h3>
      <h1 className="text-2xl font-bold">First level heading</h1>
      <br />
      <h1 className="text-2xl font-bold">My heading 1</h1>
      <p className="text-lg">Here is my paragraph</p>
      <h2 className="text-xl font-semibold">My heading 2</h2>
      <p className="text-lg">Another paragraph</p>
      <br />
      <h1 className="text-2xl font-bold">My heading 1</h1>
      <ul className="list-disc pl-5">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      <p className="text-lg">Some paragraph outside list</p>
      <ul className="list-disc pl-5">
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      <br />
      <h1 className="text-2xl font-bold">The classes I am taking are:</h1>
      <ul className="list-disc pl-5">
        <li>Math 217</li>
        <li>CS 416</li>
        <li>Hist 101</li>
      </ul>
      <h2 className="text-xl font-semibold">Outside interests</h2>
      <h3 className="text-lg font-medium">Hobbies</h3>
      <ol className="list-decimal pl-5">
        <li>photography</li>
        <li>swimming</li>
        <li>running</li>
      </ol>
      <br />
      <h1 className="text-2xl font-bold">To do list:</h1>
      <ol className="list-decimal pl-5">
        <li>Order pizza</li>
        <li>Clean the house</li>
        <ul className="list-disc pl-5">
          <li>Sweep the floors</li>
          <li>Take out garbage</li>
          <li>Clean the kitchen</li>
        </ul>
        <li>Go to the DMV</li>
      </ol>
      <br />
      <h1 className="text-2xl font-bold">
        Some <span className="underline">of my</span> classes
      </h1>
      <p className="text-lg">
        I am <span className="font-bold">taking 2</span> classes this semester
      </p>
      <ul className="list-disc pl-5">
        <li>
          MATH 101{" "}
          <span className="italic">
            in the <span className="font-bold">morning</span>
          </span>{" "}
          Monday
        </li>
        <li>CS 110</li>
      </ul>
      <br />
      <p className="text-lg">Paragraph 1</p>
      <hr className="my-4" />
      <p className="text-lg">Paragraph 2</p>
      <br />
      <p className="text-lg">
        Some &nbsp; &nbsp;content some other content
        <br />
        last content
      </p>
      <br />
      <h1 className="text-2xl font-bold">This is a cute cat picture</h1>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
        alt="cat"
        width={250}
        height={250}
        className="w-64"
      />
      <br />
      <h1 className="text-2xl font-bold">Structure of this website</h1>
      <ul className="list-disc pl-5">
        <li>
          <a href="" className="text-blue-500 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="" className="text-blue-500 hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="" className="text-blue-500 hover:underline">
            Photos
          </a>
        </li>
        <li>
          <a href="" className="text-blue-500 hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <br />
      <h1 className="text-2xl font-bold text-blue-500">
        My <span className="underline">heading</span>
      </h1>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
        alt="cat"
        width={250}
        height={250}
        className="w-64"
      />
      <p className="text-lg text-red-500">
        This image should have the width of 250px, source
        <br />
        &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg&quot;
      </p>
      <hr className="my-4" />
      <h1 className="text-2xl font-bold text-purple-500">Another heading</h1>
      <ul className="list-disc pl-5 italic">
        <li className="text-green-500">item 1</li>
        <li className="text-blue-500">item 2</li>
        <li className="text-red-500">item 3</li>
      </ul>
    </div>
  );
}
