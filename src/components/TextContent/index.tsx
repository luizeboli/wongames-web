import Heading from 'components/Heading';

import * as S from './styles';

export type TextContentProps = {
  title?: string;
  body: string;
};

const TextContent = ({ title, body }: TextContentProps) => (
  <S.Container>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: body }} />
  </S.Container>
);

export default TextContent;
