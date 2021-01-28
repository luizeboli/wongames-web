import { Container } from 'components/Container';
import Empty from 'components/Empty';
import Layout from 'screens/Layout';

export default function Page404() {
  return (
    <Layout>
      <Container>
        <Empty title="404: Not found" description="Ops...this page does not exist. Go back to the store and enjoy our offers." hasLink />
      </Container>
    </Layout>
  );
}
