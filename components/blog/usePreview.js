import cookie from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function (props, func) {
    const router = useRouter();
    const preview = cookie.get('io.prismic.preview');
    const cookieData = preview && JSON.parse(preview);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const shouldLoadPreview = cookieData && Object.keys(cookieData).length > 1;
    if (shouldLoadPreview && !data && !isLoading) {
        setIsLoading(true);
        func(preview, router.query).then((res) => {
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
