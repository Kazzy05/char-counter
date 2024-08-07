import React, { useState, ChangeEvent } from 'react';
import { Box, Textarea, Text} from '@chakra-ui/react'

const CharCounter: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const countWithoutNewlines = (text: string): number => {
    return text.replace(/\n/g, '').length;
  };

  return (
    <Box>
      <Textarea
        value={text}
        onChange={handleChange}
        rows={25}
        cols={120}
        placeholder="ここにテキストを入力してください"
        bg="gray.50"
      />
      <Text fontSize='xl'>文字数: {countWithoutNewlines(text)}</Text>
    </Box>
  );
};

export default CharCounter;
