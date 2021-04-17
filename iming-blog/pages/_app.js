import 'antd/dist/antd.css';
import '../styles/globals.css';
import 'highlight.js/styles/atelier-cave-dark.css';

import {  Provider, Connect } from 'react-redux';
import App from 'next/app'
import WithRedux from '../components/withRedux';

function MyApp({ Component, pageProps, ReduxStore }) {
  return (
    <Provider store={ ReduxStore }>  
      <Component {...pageProps} />
    </Provider>
  )
  
  
}


// MyApp.getInitialProps = async appContext => {
// 	const appProps = await App.getInitialProps(appContext);
	
// 	/* 获取store并初始化 */
// 	const store = appContext.ReduxStore;
// 	store.subscribe(() => {
// 		console.log("store change");
// 	});
// 	store.dispatch({ type: "add" });
	
// 	return { ...appProps };
// };

// export default MyApp


MyApp.getInitialProps = async appContext => {
	const appProps = await App.getInitialProps(appContext);
	
	/* 获取store并初始化 */
	const store = appContext.ReduxStore;
	store.subscribe(() => {
		console.log("store change");
	});
	store.dispatch({ type: "add" });
	
	return { ...appProps };
};
/* 使用WithRedux */
export default WithRedux(MyApp);
