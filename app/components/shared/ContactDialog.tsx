import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SocialIcon } from "react-social-icons";

const ContactDialog = ({
  isContactOpen,
  setIsContactOpen,
}: {
  isContactOpen: boolean;
  setIsContactOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
      <DialogContent className="max-sm:scale-[0.8]">
        <DialogHeader className="w-full">
          <DialogTitle className="text-5xl text-center">Contact me</DialogTitle>
          <DialogDescription className="text-center">
            Below is a list of ways to get in touch with me.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <a href="mailto:bodakondrackij@gmail.com" className="text-xl">
            <SocialIcon
              url="mailto:bodakondrackij@gmail.com"
              className="scale-50"
            />
            bodakondrackij@gmail.com
          </a>
          <a
            className="text-xl"
            href="https://www.linkedin.com/in/bohdan-kondratskyi-0a0443289/"
            target="_blank"
          >
            <SocialIcon
              url="linkedin.com"
              className="scale-50"
              href="https://www.linkedin.com/in/bohdan-kondratskyi-0a0443289/"
            />
            Bohdan Kondratskyi
          </a>
          <a className="text-xl" href="https://t.me/elcement" target="_blank">
            <SocialIcon
              url="web.telegram.org"
              href="https://t.me/elcement"
              className="scale-50"
            />
            elcement
          </a>
          <a
            className="text-xl"
            href="https://www.instagram.com/cementix_/"
            target="_blank"
          >
            <SocialIcon
              url="instagram.com"
              className="scale-50"
              href="https://www.instagram.com/cementix_/"
            />
            cementix_
          </a>
          <a
            className="text-xl"
            href="https://discordapp.com/users/cement._/"
            target="_blank"
          >
            <SocialIcon
              url="discord.com"
              href="https://discordapp.com/users/cement._/"
              className="scale-50"
            />
            cement._
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
