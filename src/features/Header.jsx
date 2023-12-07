import {
  Button,
  Flex,
  HStack,
  Image,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import bubbleImg from "@/assets/images/bubble.png";
import logoImg from "@/assets/images/logo.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagInd from "@/assets/images/india.png";
// import flagFRImg from "@/assets/images/flag-fr.png";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { ProjectsAPI } from "../api/projects";
import { useEffect, useState } from "react";

export const Header = () => {
  const { t, i18n } = useTranslation("home");

  const [projects, setProjects] = useState();

  useEffect(() => {
    (async () => {
      const projectsResponse = await ProjectsAPI.fetchAll();
      setProjects(projectsResponse);
    })();
  }, []);

  const switchLanguage = () => {
    console.log("language changed");
    i18n.language = "en";
    console.log(i18n.language);

    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  async function downloadRes() {
    let list = "";
    projects.map((resum) => {
      resum.title === "PortFolio" ? (list = resum) : "";
    });
    const url = list.resume.map((url) => url.downloadURL);
    const resumeResponse = await fetch(url); // this will give the url of the image
    const resumepdf = await resumeResponse.blob(); // this will create a blob of a image for download
    saveAs(resumepdf, "Sumit_Resume");
  }

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify={"space-between"}>
      <HStack>
        <Image src={logoImg} h={10} />
      </HStack>
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
          {/* {t("hireMe")} */}
          <Button style={{ background: "Lightgreen" }}>Hire Me</Button>
        </Link>

        <Button style={{ background: "skyblue" }} onClick={downloadRes}>
          Download Resume
        </Button>
        {/* <Button>
          <a href="My Resume(sumit).pdf" download="SumitResume.pdf">
            Download Resume // THis Button download resume from in the code, Only thing you can you --> Add you resume or other file in public folder
                              and in href give the file name and in download "give the same of you downloaded file"
          </a>
        </Button> */}
        {colorMode === "dark" ? (
          <SunIcon h={8} w={8} onClick={toggleColorMode} cursor="pointer" />
        ) : (
          <MoonIcon onClick={toggleColorMode} h={8} w={8} cursor="pointer" />
        )}
        <Image
          onClick={switchLanguage}
          // pl={10}
          src={i18n.language === "en" ? flagENImg : flagInd}
          // src={flagENImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
};
