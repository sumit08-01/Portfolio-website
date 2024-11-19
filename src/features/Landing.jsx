import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";
// import humanImg from "@/assets/images/human.png";
import human2 from "@/assets/images/human2.webp";
import { Badge } from "../components/Badge";
// import { useTranslation } from "react-i18next";
const SKILLS = [
  { lable: "java" },
  { lable: "springBoot" },
  { lable: "React" },
  { lable: "Redux" },
  { lable: "Git" },
];

export const Landing = () => {
  // const { t } = useTranslation("home");
const years = new Date().getFullYear() - 2022; // 2024-2022 = 2
const months = new Date().getMonth(); // 11
const fractionOfYear = months / 12; 
const result = years + fractionOfYear;
console.log(result.toFixed(1));  // The toFixed(1) ensures one decimal place
  const experience = result.toFixed(1);

  const { colorMode } = useColorMode();
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }} // screen small fz=2xl, mid=4xl, large=7xl
        // color="secondary"
        color={colorMode === "dark" ? "light" : "secondary"}
        whiteSpace="pre-line"
      >
        {/* {t("greetings")} */}
        Hi, my name is <br />
        Sumit
        <Text as="span" color="primary.dark">
          .
        </Text>
      </Heading>
      <Text fontSize="lg" ccolor={colorMode === "dark" ? "light" : "secondary"}>
        I am a{" "}
        <Text as="span" fontWeight="bold">
          {/*  if you add only Text it behave like a div, and when you add as="span" now it a span */}
          fullStack web developer
        </Text>
        <br /> located in Noida/India
      </Text>
      <Wrap mt={14}>
        {/* if you use 15, it's not a valid  */}{" "}
        {/* Wrap by default make the content in row  and responsev*/}
        {SKILLS.map((skill) => (
          <WrapItem key={skill.lable}>
            <Badge bg={skill.lable}>{skill.lable}</Badge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
      {/* <Text fontSize="xl">
        {new Date().getFullYear() - 2022 + "." + (new Date().getMonth() - 2)}
      </Text> */}
      <Text fontSize="xl">{experience}</Text>
      <Text>years of experience</Text>
    </Badge>
  );
  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={human2} width={450} h={600} />
    </Box>
  );
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // when screen is small then the comonent in coloum and margind top is 50 when it is large the row and mt 150
      justify="space-evenly"
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
};
