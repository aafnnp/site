import React,{memo} from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";

// eslint-disable-next-line react/display-name
const ContentPlaceholder = memo(() => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </motion.div>
  );
});

export default ContentPlaceholder;
