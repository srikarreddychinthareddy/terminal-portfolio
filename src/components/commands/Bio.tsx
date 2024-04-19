import { GoVerified } from "react-icons/go";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function Bio() {
  const links = [
    {
      title: "Github",
      Icon: SiGithub,
      href: "https://github.com/srikarreddychinthareddy",
      text: "@srikarreddychinthareddy",
    },
    {
      title: "Linkedin",
      Icon: SiLinkedin,
      href: "https://www.linkedin.com/in/srikarreddy-chinthareddy/",
      text: "@OpentoWork",
    },
    {
      title: "Gmail",
      Icon: SiGmail,
      href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpRhQtbhNRKmlFZFhZHxrGdHZVdQJfhCVtLnwkRWZJDPLdbWlhsZCDhPXvHgWjVKllMjvX",
      text: "@srikar.chinthareddy@gmail.com",
    },
  ];
  return (
    <div className="mt-2 mb-2 w-11/12 mx-auto">
      <div className="flex items-center gap-3 mb-3 ">
        <img
          src="https://avatars.githubusercontent.com/u/84009722?s=400&u=e497910634794c15d4903ccfc3d0f83f711ae534&v=4"
          alt="SrikarReddy"
          className="w-40 h-40 rounded-full border-2 border-yellow-200"
        />
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-2xl">SrikarReddy</h1>
            <GoVerified className="text-blue-500 text-2xl" />
          </div>
          <p className="text-lg text-gray-400">Join the world 22 years ago.</p>
        </div>
      </div>
      <p>
        Hi there, I am a software developer. Passionate with web development and
        like to learn new thing related to coding.
      </p>
      <div className="grid grid-cols-2">
        {links.map(({ Icon, text, href, title }, index) => {
          return (
            <div className="flex items-center gap-1 mt-3" key={index}>
              <div className="text-lg flex items-center gap-1 text-yellow-200">
                <Icon />
                <h1>{title}</h1>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex-1 underline text-blue-300 "
              >
                {text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
