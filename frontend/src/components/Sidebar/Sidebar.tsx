import {
  Box,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaFile, FaFolder } from "react-icons/fa";

const fileStructure = [
  {
    folderName: "src",
    files: ["App.js", "index.js"],
    subFolders: [
      {
        folderName: "components",
        files: ["Sidebar.js"],
      },
    ],
  },
  {
    folderName: "public",
    files: ["index.html"],
  },
];

function Sidebar() {
  return (
    <Box
      color={"white"}
      w="250px"
      h="100vh"
      bg={"rgba(51,51,51,0.8)"}
      p={4}
      overflowY="auto"
    >
      <VStack align="start">
        {fileStructure.map((folder, index) => (
          <Accordion key={index} allowMultiple w="100%">
            <AccordionItem border={"none"}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">
                    <HStack>
                      <FaFolder color="grey" />
                      <Text>{folder.folderName}</Text>
                    </HStack>
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {/* Render files */}
                <List spacing={2}>
                  {folder.files.map((file, fileIndex) => (
                    <ListItem key={fileIndex}>
                      <HStack>
                        <FaFile color="grey" />
                        <Text>{file}</Text>
                      </HStack>
                    </ListItem>
                  ))}
                </List>

                {/* Render sub-folders */}
                {folder.subFolders &&
                  folder.subFolders.map((subFolder, subFolderIndex) => (
                    <Accordion key={subFolderIndex} allowMultiple>
                      <AccordionItem border={"none"}>
                        <AccordionButton>
                          <Box textAlign="left">
                            <HStack>
                              <FaFolder color="grey" />
                              <Text>{subFolder.folderName}</Text>
                            </HStack>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <List spacing={2}>
                            {subFolder.files.map((file, subFileIndex) => (
                              <ListItem key={subFileIndex}>
                                <HStack>
                                  <FaFile color="grey" />
                                  <Text>{file}</Text>
                                </HStack>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;
