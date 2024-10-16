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
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa";
import { getDir } from "../../api/fileManager";
import { FileStructure } from "../types/types";
const renderDirectory = (folder: FileStructure) => {
  console.log(folder);
  // If the folder has children, it's treated as a folder, otherwise as a file.
  if (folder.children) {
    return (
      <Accordion allowMultiple >
        <AccordionItem border={"none"}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">
                <HStack>
                  <FaFolder color="grey" />
                  <Text>{folder.name}</Text>
                </HStack>
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel >
            <List >
              {folder.children.map((child, index) => (
                <ListItem key={index}>
                  {/* Recursive call for subfolders */}
                  {renderDirectory(child)}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  } else {
    return (
      <List>
        <ListItem>
          <HStack>
            <FaFile color="grey" />
            <Text onClick={()=> console.log(folder.path)}>{folder.name}</Text>
          </HStack>
        </ListItem>
      </List>
    );
  }
};

function Sidebar() {
  const [dir, setDir] = useState<FileStructure | undefined>(undefined);
  async function getCurrentDir() {
    const dir = await getDir();
    setDir(dir?.result);
  }
  useEffect(() => {
    getCurrentDir();
  }, []);
  console.log(dir);
  return (
    <Box
      color={"white"}
      w="250px"
      h="100vh"
      bg={"rgba(51,51,51,0.8)"}
      p={4}
      overflowY="auto"
    >
      {dir?.children?.map((folder, index) => (
        <Box key={index}>{renderDirectory(folder)}</Box>
      ))}
    </Box>
  );
}

export default Sidebar;
