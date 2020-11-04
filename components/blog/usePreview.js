import cookie from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function usePreview(props, func) {
    const router = useRouter();
    const query = router.query;

    const preview = cookie.get('io.prismic.preview');
    if (preview && !Object.keys(router.query).length) {
        const routeParts = router.pathname.match(/\[.*?\]/g);
        if (routeParts && routeParts.length) {
            const parts = router.asPath.split('/');
            router.pathname.split('/').map((item, index) => {
                const paramMatch = item.match(/\[.*?\]/g);
                if (paramMatch) {
                    const key = paramMatch[0].replace(/[\[\]]/g, '');
                    query[key] = parts[index];
                }
            });
        }
    }
    const cookieData = preview && JSON.parse(preview);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const shouldLoadPreview = cookieData && Object.keys(cookieData).length > 1;
    if (shouldLoadPreview && !data && !isLoading) {
        setIsLoading(true);
        func(preview, query).then((res) => {
            setData(res.props);
            setIsLoading(false);
        });
    }

    if (!shouldLoadPreview) {
        return props;
    }

    return {
        isLoading,
        ...(data || {}),
    };
}
