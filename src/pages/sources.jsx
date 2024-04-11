import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';

export default function Sources() {
  return (
    <>
      <Head>
        <title>Sources - Your Website Name</title>
        <meta name="description" content="Page for downloading sources" />
      </Head>
      <SimpleLayout
        title="Sources"
        intro="History is fun and history is about sharing. On this page you can download sources and files relevant to Black American soldiers during the Second World War. During my research I've come across several documents, which I had digitized, and which are now freely available."
      >
        <div className="mt-8">
          <a
            href="/thegoldencannon.pdf"
            download="thegoldencannon.pdf"
            className="text-blue-500 hover:underline"
          >
            The Golden Cannon: A history of the 969th Field Artillery Battalion (PDF). 
          </a>
        </div>
      </SimpleLayout>
    </>
  );
}
