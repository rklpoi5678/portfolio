// app/profile/[id]/page.tsx
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Define the content for Resume and About Me sections
// In a real application, you might fetch this from a CMS or a separate data file.
import { contentData } from '@/types/contentData';

type ProfilePageProps = {
  params: {
    id: string;
  };
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;

  // Determine which content to render based on the id, default to '1' (Resume)
  const currentContent = contentData[id === '2' ? '2' : '1'];

  // Determine navigation links
  const isResumePage = id === '1' || !id; // If id is 1 or not provided, it's the resume page
  const nextLink = isResumePage ? '/profile/2' : '/profile/1';
  const nextLabel = isResumePage ? '자기소개서 →' : '← 이력서';

  // const profileImageUrl = '/profile-image-resume.jpg';
  const profileImageUrl = '/designer-cover.png';
  return (
    <>
      <Head>
        <title>{currentContent.headTitle}</title>
        <meta name="description" content={currentContent.description} />
      </Head>

      <div className="max-w-5xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg font-sans text-gray-800 leading-relaxed relative">
        {/* Back Button */}
        <div className="mb-6 text-left">
          <Link href="/" className="inline-block px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200">
            &larr; 홈으로 돌아가기
          </Link>
        </div>

        {/* Profile Header */}
        <header className="grid grid-cols-2 gap-8 mb-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">김윤기</h1>
            <p className="text-lg text-gray-700 mb-1">YOUNGI</p>
            <p className="text-md text-gray-600 mb-1">📍 2000.02.21 | B형</p>
            <p className="text-md text-gray-600 mb-1">📍 대구광역시 달서구 송현동</p>
            <p className="text-md text-gray-600 mb-1">📧 hatch_a@naver.com | 📞 010.2180.6913</p>
            <p className="text-md text-gray-600">🔗 rklpoi1234.github.com</p>
          </div>
          <div className="flex justify-end">
            <div className="relative w-60 h-60 rounded-lg overflow-hidden">
              <Image src={profileImageUrl} alt="프로필 사진" layout="fill" objectFit="cover" />
            </div>
          </div>
        </header>

        {/* Render the specific content for Resume or About Me */}
        <div className="mt-6">{currentContent.renderContent}</div>

        {/* Navigation Arrows - positioned fixed to the viewport, centered vertically */}
        {isResumePage && (
          <Link href="/profile/2" className="fixed right-20 top-1/2 transform -translate-y-1/2 pr-4 z-10">
            <button className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            소개
            </button>
          </Link>
        )}

        {!isResumePage && (
          <Link href="/profile/1" className="fixed left-20 top-1/2 transform -translate-y-1/2 pl-4 z-10">
            <button className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              이력
            </button>
          </Link>
        )}
      </div>

      <footer className="text-center py-6 mt-10 border-t border-gray-200 text-gray-600 text-sm">
        <p>&copy; 2025 김윤기. All rights reserved.</p>
      </footer>
    </>
  );
}