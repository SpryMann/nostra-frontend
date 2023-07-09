import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

function ScrollToTop(props: Props) {
  const { children } = props;
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return children;
}

export default ScrollToTop;
