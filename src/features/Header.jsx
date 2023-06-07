import { Flex, HStack, Icon, Image, Link } from "@chakra-ui/react";
import bubbleImg from "@/assets/images/bubble.png";
import logoImg from "@/assets/images/logo.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagFRImg from "@/assets/images/flag-fr.png";
import { useTranslation } from "react-i18next";
import { BsDownload } from "react-icons/bs";

export const Header = () => {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    console.log("language changed");
    i18n.language = "en";
    console.log(i18n.language);

    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        {/* this will align the component horizontialy */}
        <Image src={bubbleImg} h={10} />
        <Link
          href={
            // "mailto:sumitgond9999@gmail.com?compose=Contacting you from your portfolio"
            "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqVxJmnxqJgTxPpnsXDNlKJPZbltpLmFDrGsVjfBTsJfhCSHVKCRlkfVXxGLfDMJGvvGRg"
          }
          fontSize="lg"
          fontWeight="bold"
          isExternal
        >
          {t("hireMe")}
        </Link>
        <Link href="https://github.com/sumit0108/Resume.git" isExternal>
          <Icon as={BsDownload} w={8} h={8} />
        </Link>

        <Image
          onClick={switchLanguage}
          pl={20}
          src={i18n.language === "en" ? flagENImg : flagFRImg}
          // src={flagENImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
};
