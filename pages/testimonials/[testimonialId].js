import { useRouter } from 'next/router';

const TestimonailPage = () => {
    const router = useRouter();
    return (
        <h1 className="text-center text-2xl p-20">
            Hi from{' '}
            <span className="text-hci-lila">{router.query.testimonialId}</span>
        </h1>
    );
};

export default TestimonailPage;
