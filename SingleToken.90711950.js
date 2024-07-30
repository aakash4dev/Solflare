"use strict";(self.webpackChunk_solflare_extension=self.webpackChunk_solflare_extension||[]).push([["SingleToken","vendors-node_modules_mui_styles_makeStyles_index_js"],{"../../../node_modules/@mui/styles/makeStyles/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i.Z});var i=n("../../../node_modules/@mui/styles/makeStyles/makeStyles.js")},"../../../node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(e,t,n)=>{n.r(t),n.d(t,{ErrorBoundary:()=>r,ErrorBoundaryContext:()=>s,useErrorBoundary:()=>a,withErrorBoundary:()=>l});var i=n("../../../node_modules/react/index.js");const s=(0,i.createContext)(null),o={didCatch:!1,error:null};class r extends i.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=o}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(null!==e){for(var t,n,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];null===(t=(n=this.props).onReset)||void 0===t||t.call(n,{args:s,reason:"imperative-api"}),this.setState(o)}}componentDidCatch(e,t){var n,i;null===(n=(i=this.props).onError)||void 0===n||n.call(i,e,t)}componentDidUpdate(e,t){const{didCatch:n}=this.state,{resetKeys:i}=this.props;var s,r;n&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some(((e,n)=>!Object.is(e,t[n])))}(e.resetKeys,i)&&(null===(s=(r=this.props).onReset)||void 0===s||s.call(r,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(o))}render(){const{children:e,fallbackRender:t,FallbackComponent:n,fallback:o}=this.props,{didCatch:r,error:a}=this.state;let l=e;if(r){const e={error:a,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)l=t(e);else if(n)l=(0,i.createElement)(n,e);else{if(null!==o&&!(0,i.isValidElement)(o))throw a;l=o}}return(0,i.createElement)(s.Provider,{value:{didCatch:r,error:a,resetErrorBoundary:this.resetErrorBoundary}},l)}}function a(){const e=(0,i.useContext)(s);!function(e){if(null==e||"boolean"!=typeof e.didCatch||"function"!=typeof e.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found")}(e);const[t,n]=(0,i.useState)({error:null,hasError:!1}),o=(0,i.useMemo)((()=>({resetBoundary:()=>{e.resetErrorBoundary(),n({error:null,hasError:!1})},showBoundary:e=>n({error:e,hasError:!0})})),[e.resetErrorBoundary]);if(t.hasError)throw t.error;return o}function l(e,t){const n=(0,i.forwardRef)(((n,s)=>(0,i.createElement)(r,t,(0,i.createElement)(e,{...n,ref:s})))),s=e.displayName||e.name||"Unknown";return n.displayName="withErrorBoundary(".concat(s,")"),n}},"./src/features/activity/components/ActivityItem/index.js":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../libs/shared/dist/features/activity/index.js"));t.default=e=>{return(0,s.jsx)(s.Fragment,{children:(t=e?.item,t?.components?(0,o.parse)(t.components.lineItem):(0,s.jsx)(o.ExtLineItem,{loading:!0}))});var t}},"./src/features/activity/components/SingleActivity/index.js":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../../node_modules/react-redux/es/index.js"),a=n("../../../node_modules/react-router-dom/esm/react-router-dom.js"),l=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),c=i(n("../../../node_modules/@mui/styles/makeStyles/index.js")),d=i(n("../../../node_modules/dayjs/dayjs.min.js")),u=n("../../../node_modules/redux/es/redux.js"),m=n("../../libs/foundation-ui/dist/index.js"),f=n("../../libs/shared/dist/components/withWallet/index.js"),h=n("../../libs/shared/dist/features/activity/index.js"),p=n("../../libs/shared/dist/store/actions/common.js"),x=n("../../libs/shared/dist/utils/displayPrice.js"),g=n("../../libs/shared/dist/utils/truncateMiddle.js"),_=(0,c.default)((e=>({list:{marginLeft:0,marginRight:0},item:{color:e.palette.common.white},pointer:{cursor:"pointer"},price:{opacity:.5}}))),j=(0,u.compose)((0,f.withWallet)({protectedPage:!0,Fallback:()=>(0,s.jsx)(a.Redirect,{to:"/"})}),(0,r.connect)(null,{openExplorerTransaction:p.openExplorerTransaction}))((({transaction:e,onBack:t,openExplorerTransaction:n})=>{const{t:i}=(0,o.useTranslation)(),r=_(),a=[{id:"timestamp",data:(0,s.jsx)(m.ActivityDetailsRow,{title:i("form_date"),children:(0,s.jsx)("span",{children:`${(0,d.default)(1e3*e.blockTime).format("YYYY MMMM D")} ${i("at_time")} ${(0,d.default)(1e3*e.blockTime).format("HH:mm:ss")}`})})},{id:"details",data:(0,s.jsx)(m.ActivityDetailsRow,{title:i("form_details"),children:(0,h.parse)(e.components.expandedData.details)})}];return e.components.expandedData.balances&&a.push({id:"balances",data:(0,s.jsx)(m.ActivityDetailsRow,{title:i("form_transaction_result"),children:(0,h.parse)(e.components.expandedData.balances,{layout:"details"})})}),e.fee&&a.push({id:"fee",data:(0,s.jsxs)(m.ActivityDetailsRow,{title:i("form_transaction_fee"),children:[(0,s.jsxs)("span",{children:[e.fee.amount," ",e.fee.symbol]}),(0,s.jsx)(m.Typography,{variant:"textXS",color:"secondary",children:(0,x.displayPrice)({amount:e.fee.amount*e.fee.price,displayType:"value",prefix:"$"})})]})}),a.push({id:5,data:(0,s.jsxs)(m.ActivityDetailsRow,{title:i("transaction_id"),childrenClassName:r.pointer,children:[(0,s.jsx)("span",{onClick:()=>{n({signature:e.hash})},children:(0,g.truncateMiddle)(e.hash)}),(0,s.jsx)(m.Tooltip,{content:i("action_view_in_explorer"),children:(0,s.jsx)(m.IconV2,{onClick:()=>{n({signature:e.hash})},size:"s",color:"linkPrimary",icon:l.faExternalLink})})]})}),(0,s.jsxs)(m.PagePortal,{children:[(0,s.jsx)(m.PageTitle,{left:(0,s.jsx)(m.ActionableIcon,{icon:l.faArrowLeft,size:"l",onClick:t}),center:e.components.expandedData.title}),(0,s.jsx)(m.PageContent,{noBottomPadding:!0,children:(0,s.jsx)(m.GeneralList,{className:r.list,extractKey:e=>e.id,data:a,renderItem:e=>e.data})})]})}));t.default=j},"./src/features/singleToken/components/AssociatedAccounts/index.tsx":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../../node_modules/react-redux/es/index.js"),a=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),l=n("../../../node_modules/lodash/lodash.js"),c=n("../../libs/foundation-ui/dist/index.js"),d=n("../../libs/shared/dist/features/featureFlags/singleToken/index.js"),u=n("../../libs/shared/dist/store/actions/common.js"),m=n("../../libs/shared/dist/utils/displayPrice.js"),f=n("../../libs/shared/dist/utils/truncateMiddle.js");t.default=({token:e,currencyPrefix:t,onTransferTokenClick:n,onBurnAccountClick:i,onCloseAccountClick:h})=>{const{t:p}=(0,o.useTranslation)(),x=(0,r.useDispatch)(),g=(0,l.sortBy)(e?.accounts,(e=>!e.isAta)),_=({account:e,action:t})=>e.actions?.find((e=>e.name===t));return(0,s.jsx)(c.GeneralList,{data:g,renderItem:o=>(0,s.jsx)(c.SingleTokenAccountListItem,{title:(0,f.truncateMiddle)(o.pubkey),subtitle:o.isAta?p("single_token_ata_account_title"):p("single_token_non_ata_account_title"),amount:(0,m.displayPrice)({amount:o?.uiAmount,displayType:"amount",pricePerCoin:e?.price?.usdPrice||0}),value:"0"!==o.value?(0,m.displayPrice)({amount:o?.value,displayType:"value",prefix:t}):void 0,menuItems:(0,s.jsxs)(s.Fragment,{children:[_({account:o,action:"send"})&&(0,s.jsx)(c.DropdownMenuItem,{size:"s",icon:a.faArrowUp,onClick:()=>n(e,"singleTokenAccountsThreeDot",o.pubkey),children:p("action_send")}),(0,s.jsx)(c.DropdownMenuItem,{size:"s",icon:a.faExternalLink,onClick:async()=>{await(0,d.logSingleTokenViewOnExplorerClick)(e.symbol??"",e.mint,"singleTokenAccountsThreeDot"),x((0,u.openExplorerAccount)({account:o.pubkey}))},children:p("action_view_in_explorer")}),(0,s.jsx)(c.Divider,{}),_({account:o,action:"burn-and-close"})?(0,s.jsx)(c.DropdownMenuItem,{size:"s",icon:a.faFire,onClick:()=>i(e,o.pubkey),variant:"destructive",children:p("action_burn")}):_({account:o,action:"close"})&&(0,s.jsx)(c.DropdownMenuItem,{size:"s",icon:a.faTrashAlt,onClick:()=>h(e,"singleTokenAccountsThreeDot",o.pubkey),variant:"destructive",children:p("action_close_account")})]})},o.pubkey),extractKey:e=>e.pubkey})}},"./src/features/singleToken/components/Chart/ChartComponent.tsx":function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var s=Object.getOwnPropertyDescriptor(t,n);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,s)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const r=n("../../../node_modules/react/jsx-runtime.js"),a=o(n("../../../node_modules/react/index.js")),l=n("../../../node_modules/lightweight-charts/dist/lightweight-charts.production.cjs"),c=n("../../libs/foundation-ui/dist/index.js"),d=e=>{if("hover"===e){const e=c.solflareTokens.compChartLineChartLineFillBackgroundColorHoverColors;return{topColor:e[0],bottomColor:e[e.length-1],lineColor:c.solflareTokens.compChartLineChartLineBorderColorHover}}if("negative"===e){const e=c.solflareTokens.compChartLineChartLineFillBackgroundColorNegativeColors;return{topColor:e[0],bottomColor:e[e.length-1],lineColor:c.solflareTokens.compChartLineChartLineBorderColorNegative}}const t=c.solflareTokens.compChartLineChartLineFillBackgroundColorPositiveColors;return{topColor:t[0],bottomColor:t[t.length-1],lineColor:c.solflareTokens.compChartLineChartLineBorderColorPositive}};t.default=({data:e,currentPeriod:t,onPriceChange:n})=>{const[i,s]=(0,a.useState)(!1),[o,u]=(0,a.useState)(null),[m,f]=(0,a.useState)(!1);(0,a.useEffect)((()=>{u(null)}),[t]),(0,a.useEffect)((()=>{if(!e?.length)return;const t=null===o?e[e.length-1].close:o.price,i=null===o?null:o.time,s=e[0];n?.({price:t,priceChange:(t-s.close)/s.close*100,time:i})}),[o?.time,o?.price,e,n]);const h=(0,a.useRef)(null),p=(0,a.useRef)(null),x=(0,a.useRef)(null),g=(0,a.useCallback)((e=>{e&&(h.current=e,p.current=(0,l.createChart)(e,{autoSize:!0,layout:{background:{type:l.ColorType.Solid,color:c.solflareTokens.semanticColorsSurfaceElevation0}},leftPriceScale:{autoScale:!0,visible:!1,scaleMargins:{top:.025,bottom:.2}},rightPriceScale:{autoScale:!0,visible:!1,scaleMargins:{top:.02,bottom:.2}},timeScale:{visible:!1,fixRightEdge:!0,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightOffset:0,secondsVisible:!1},crosshair:{mode:l.CrosshairMode.Normal,vertLine:{visible:!0,color:c.solflareTokens.compChartCrosshairVerticalBorderColorHover,width:1,style:l.LineStyle.Dashed},horzLine:{visible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}},handleScroll:!1,handleScale:!1}),x.current=p.current.addAreaSeries({...d("positive"),lineWidth:c.solflareTokens.compChartLineChartLineBorderWidth,priceLineVisible:!1,lastValueVisible:!1,priceScaleId:"left",lineType:l.LineType.Simple}),p.current.timeScale().fitContent(),s(!0))}),[]);(0,a.useEffect)((()=>{if(!(i&&p.current&&x.current&&e?.length))return;x.current.setData(e.map((e=>({time:e.time/1e3,value:e.close}))));const t=e=>{const t=e.seriesData.get(x.current);t&&u({price:t.value,time:t.time})};p.current.subscribeCrosshairMove(t),p.current.timeScale().fitContent();const n=p.current.timeScale().getVisibleLogicalRange();n&&p.current.timeScale().setVisibleLogicalRange({from:.5,to:n.to-.5});const s=()=>f(!0),o=()=>f(!1),r=()=>p.current?.applyOptions({});return h.current.addEventListener("mouseenter",s),h.current.addEventListener("mouseleave",o),document.addEventListener("visibilitychange",r),()=>{p.current?.unsubscribeCrosshairMove(t),h.current?.removeEventListener("mouseenter",s),h.current?.removeEventListener("mouseleave",o),document.removeEventListener("visibilitychange",r)}}),[t,i]);const _=e?.[e.length-1];(0,a.useEffect)((()=>{if(!(i&&x.current&&p.current&&_))return;const e=x.current.data(),t=e[e.length-1];!t||+t?.time>_.time/1e3||x.current.update({time:_.time/1e3,value:_.close})}),[_.time,_.close,i]);const j=m?"hover":e[e.length-1]?.close>=e[0]?.close?"positive":"negative";return(0,a.useEffect)((()=>{if(i&&p.current&&x.current&&(x.current.applyOptions(d(j)),n&&("positive"===j||"negative"===j))){const e=x.current.data(),t=e[0],i=e[e.length-1];if(i){const e=i.value;n({price:e,priceChange:(e-t.value)/t.value*100})}}}),[j,i]),(0,r.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,r.jsx)("div",{ref:g,style:{width:"100%",height:"100%",position:"absolute"}})})}},"./src/features/singleToken/components/Chart/index.tsx":function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var s=Object.getOwnPropertyDescriptor(t,n);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,s)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n("../../../node_modules/react/jsx-runtime.js"),l=o(n("../../../node_modules/react/index.js")),c=n("../../../node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),d=n("../../../node_modules/react-i18next/dist/es/index.js"),u=n("../../../node_modules/@tanstack/react-query/build/lib/index.js"),m=r(n("../../../node_modules/dayjs/dayjs.min.js")),f=n("../../libs/foundation-ui/dist/index.js"),h=n("../../libs/shared/dist/features/tradingView/index.js"),p=n("../../libs/shared/dist/hooks/index.js"),x=n("./src/features/singleToken/constants/chart.ts"),g=r(n("./src/features/singleToken/components/Chart/ChartComponent.tsx"));t.default=({mint:e,currency:t,isLoading:n,disabled:i,onPriceChange:s,onChartDataWarning:o})=>{const{t:r}=(0,d.useTranslation)(),[_,j]=(0,p.useStorageItem)("singleTokenChartSettings",{interval:x.DEFAULT_CHART_PERIOD}),b=(0,u.useQueryClient)(),k=x.chartPeriods[_.interval]||x.chartPeriods[x.DEFAULT_CHART_PERIOD],y=(0,l.useCallback)((n=>Object.values(x.chartPeriods).map((i=>{const s=["chartData",{baseToken:e||"",currency:t||""},i.resolution],o=b.getQueryData(s);if(!o||!o.bars?.length||!T.current)return;const r=o.bars[o.bars.length-1],a=(n.time-r.time)/1e3/60;if(n.time<r.time)return;const l=a>=i.minutes&&a<=i.extraBufferMinutes,c={...n,close:n.close*T.current,open:n.open*T.current,high:n.high*T.current,low:n.low*T.current};return l?{queryKey:s,action:{type:"push",bar:c}}:a>=i.extraBufferMinutes?{queryKey:s,action:{type:"reset"}}:{queryKey:s,action:{type:"update",bar:c}}})).filter(Boolean)),[t,e,b]),{data:v,isLoading:C}=(0,h.useChartDataWithStreaming)({baseToken:e||"",currency:t||""},k.resolution,{from:(0,m.default)().subtract(k.minutes,"minutes").unix()},y,{enabled:!(n||i||!e||!t)}),T=(0,l.useRef)(null);(0,l.useEffect)((()=>{T.current=v?.exchangeRateNumber||1}),[v?.exchangeRateNumber]);const S=v?.bars[v?.bars?.length-1]?.time;return(0,l.useEffect)((()=>{if(!S||!o)return;const e=3e5+(0,m.default)().valueOf()-S,t=setTimeout((()=>o("delayed")),e);return()=>{clearInterval(t),o("none")}}),[S,o]),n||!i&&C?(0,a.jsxs)(f.ChartContainer,{children:[(0,a.jsx)(f.ChartLoading,{label:r("portfolio_chart_loading_data")}),(0,a.jsx)(f.PillPicker,{children:Object.keys(x.chartPeriods).map((e=>(0,a.jsx)(f.PillPickerPill,{active:e===_.interval,disabled:!0,children:x.chartPeriods[e].label},e)))})]}):e&&t&&v?.bars?.length?(0,a.jsxs)(f.ChartContainer,{children:[(0,a.jsx)(c.ErrorBoundary,{resetKeys:[k.label],fallback:(0,a.jsx)(f.ChartEmpty,{label:r("portfolio_chart_unable_to_display")}),children:(0,a.jsx)(g.default,{data:v.bars,currentPeriod:k,onPriceChange:s})}),(0,a.jsx)(f.PillPicker,{children:Object.keys(x.chartPeriods).map((e=>(0,a.jsx)(f.PillPickerPill,{active:e===_.interval,onClick:()=>j((t=>({...t,interval:e}))),children:x.chartPeriods[e].label},e)))})]}):(0,a.jsxs)(f.ChartContainer,{children:[(0,a.jsx)(f.ChartEmpty,{label:r("portfolio_chart_no_data")}),(0,a.jsx)(f.PillPicker,{children:Object.keys(x.chartPeriods).map((e=>(0,a.jsx)(f.PillPickerPill,{active:e===_.interval,onClick:()=>j((t=>({...t,interval:e}))),children:x.chartPeriods[e].label},e)))})]})}},"./src/features/singleToken/components/MarketData/index.tsx":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../libs/foundation-ui/dist/index.js"),a=n("../../libs/shared/dist/features/currencies/index.js"),l=n("../../libs/shared/dist/features/currencies/utils/index.js");t.default=({marketCap:e,volume24h:t,liquidity:n,volumeChange24h:i,isLoading:c})=>{const{t:d}=(0,o.useTranslation)(),u=(0,a.useCurrentCurrency)(),m=(0,l.symbolFormatter)(u.ticker,u.symbol);return(0,s.jsxs)(r.AttributesGrid,{children:[(e||c)&&(0,s.jsx)(r.Attribute,{label:d("market_data_cap"),text:`${m}${e}`,isLoading:c},"market-cap"),(t||c)&&(0,s.jsx)(r.Attribute,{label:d("market_data_volume"),text:`${m}${t}`,tag:(0,s.jsx)(r.BalanceChangeTag,{state:"secondary",variant:i?.positive?"positive":"negative",size:"xs",children:i?.value}),isLoading:c},"24h-volume"),(n||c)&&(0,s.jsx)(r.Attribute,{label:d("market_data_liquidity"),text:`${m}${n}`,isLoading:c},"liquidity")]})}},"./src/features/singleToken/components/Socials/index.tsx":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../../node_modules/react-router/esm/react-router.js"),a=n("../../../node_modules/@fortawesome/free-brands-svg-icons/index.js"),l=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),c=n("../../libs/foundation-ui/dist/index.js"),d=n("../../libs/shared/dist/features/featureFlags/singleToken/index.js"),u=n("../../libs/shared/dist/features/portfolio/index.js");t.default=({token:e})=>{const t=async(t,n)=>{await(0,d.logSingleTokenDetailsSocialsClick)(n,t,e.symbol,e.mint),window.open(t,"_blank")},n=(0,r.useRouteMatch)(),{t:i}=(0,o.useTranslation)(),{data:m,isLoading:f}=(0,u.useTokenMoreInfo)(n.params.id);if(!m?.links)return null;const h=m.links[u.EnumTokenSocials.FACEBOOK],p=m.links[u.EnumTokenSocials.TWITTER],x=m.links[u.EnumTokenSocials.DISCORD],g=m.links[u.EnumTokenSocials.REDDIT],_=m.links[u.EnumTokenSocials.GITHUB],j=m.links[u.EnumTokenSocials.WEBSITE],b=m.links[u.EnumTokenSocials.TELEGRAM];return(0,s.jsx)(c.MoreInfoSocials,{title:i("single_token_socials_title"),children:(0,s.jsxs)(c.ChipGroup,{children:[j&&(0,s.jsx)(c.Chip,{text:"Homepage",loading:f,onClick:()=>t(j,u.EnumTokenSocials.WEBSITE),icon:l.faGlobe}),p&&(0,s.jsx)(c.Chip,{text:"Twitter",loading:f,onClick:()=>t(`https://twitter.com/${p}`,u.EnumTokenSocials.TWITTER),icon:a.faXTwitter}),x&&(0,s.jsx)(c.Chip,{text:"Discord",loading:f,onClick:()=>t(x,u.EnumTokenSocials.DISCORD),icon:a.faDiscord}),b&&(0,s.jsx)(c.Chip,{text:"Telegram",loading:f,onClick:()=>t(`https://t.me/${b}`,u.EnumTokenSocials.TELEGRAM),icon:a.faTelegram}),g&&(0,s.jsx)(c.Chip,{text:"Reddit",loading:f,onClick:()=>t(g,u.EnumTokenSocials.REDDIT),icon:a.faReddit}),h&&(0,s.jsx)(c.Chip,{text:"Facebook",loading:f,onClick:()=>t(`https://www.facebook.com/${h}`,u.EnumTokenSocials.FACEBOOK),icon:a.faFacebook}),_&&(0,s.jsx)(c.Chip,{text:"Github",loading:f,onClick:()=>t(_,u.EnumTokenSocials.GITHUB),icon:a.faGithub})]})})}},"./src/features/singleToken/components/StakingWidget/index.tsx":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../../node_modules/react-router/esm/react-router.js"),a=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),l=n("../../libs/foundation-ui/dist/index.js"),c=n("../../libs/shared/dist/features/currencies/index.js"),d=n("../../libs/shared/dist/features/portfolio/hooks/useSolanaToken.js"),u=n("../../libs/shared/dist/features/stakingCore/index.js"),m=n("../../libs/shared/dist/features/stakingModal/hooks/useStakingBanner.js"),f=n("../../libs/shared/dist/utils/lamportToSol.js");t.default=()=>{const{t:e}=(0,o.useTranslation)(),{data:t,isLoading:n}=(0,u.useStakingAccounts)(),{openStakeModal:i}=(0,m.useStakingBanner)(),{setStakingEvents:h}=(0,u.useStakingProvider)(),{data:p}=(0,d.useSolanaToken)(),{push:x}=(0,r.useHistory)(),g=t?.header?.totalAmount??0;return n?(0,s.jsx)(l.Widget,{isLoading:!0}):+g>0?(0,s.jsx)(l.Widget,{avatar:(0,s.jsx)(l.IconV2,{icon:a.faPiggyBank}),title:e("staking_title"),onClick:()=>x("/staking"),right:(0,s.jsx)(l.WidgetAmountValue,{amount:(0,s.jsx)(c.DisplayTokenAmount,{tokenAddress:"SOL",tokenAmount:(0,f.lamportsToSol)(g).toString(),suffix:" SOL"}),value:(0,s.jsx)(c.DisplayComputedFiatValue,{value:(0,f.lamportsToSol)(g).multipliedBy(p?.price?.price??0).toString()}),isLoadingValue:!p?.price?.price})}):Number((0,f.solToLamports)(Number(p?.amount)??0))<m.MINIMAL_REQUIRED_BALANCE_LAMPORTS?(0,s.jsx)(l.Widget,{title:e("staking_stake_banner_title"),subtitle:e("staking_banner_stake_subtitle"),right:(0,s.jsx)(l.Button,{size:"s",onClick:()=>{h({...u.STAKING_EVENTS_DEFAULT_STATE,source:"singleTokenBanner"}),i()},children:e("action_stake")})}):null}},"./src/features/singleToken/components/TokenAttributes/index.tsx":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../../node_modules/react-redux/es/index.js"),a=n("../../libs/foundation-ui/dist/index.js"),l=n("../../libs/shared/dist/store/actions/common.js"),c=n("../../libs/shared/dist/utils/truncateMiddle.js");t.default=({mintAddress:e,ticker:t,transactionTax:n,isLoading:i})=>{const{t:d}=(0,o.useTranslation)(),u=(0,r.useDispatch)();return e||t||n?.display?(0,s.jsxs)(a.AttributesGrid,{spacing:"l",children:[e&&(0,s.jsx)(a.Attribute,{label:d("table_mint_address"),text:(0,c.truncateMiddle)(e),variant:"secondary",isLoading:i,onClick:()=>u((0,l.copyClipboard)(e))}),t&&(0,s.jsx)(a.Attribute,{label:d("table_ticker"),text:t,variant:"secondary",isLoading:i}),n?.display&&(0,s.jsx)(a.Attribute,{label:d("transaction_tax"),text:n?.value,variant:"secondary",isLoading:i})]}):null}},"./src/features/singleToken/components/TokenSingleMoreOptions/index.tsx":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n("../../../node_modules/react/jsx-runtime.js"),o=(i(n("../../../node_modules/react/index.js")),n("../../../node_modules/react-i18next/dist/es/index.js")),r=n("../../../node_modules/react-redux/es/index.js"),a=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),l=n("../../libs/foundation-ui/dist/index.js"),c=n("../../libs/shared/dist/features/featureFlags/singleToken/index.js"),d=n("../../libs/shared/dist/store/actions/common.js");t.default=({token:e,isWrappedSolana:t,isEmptyAccount:n,onCloseAccount:i,onBurnAccount:u,onUnwrap:m,defaultPubkey:f})=>{const h=(0,r.useDispatch)(),{t:p}=(0,o.useTranslation)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.DropdownMenuItem,{size:"s",onClick:async()=>{await(0,c.logSingleTokenViewOnExplorerClick)(e.symbol??"",e.mint,"singleTokenThreeDot"),h((0,d.openExplorerAccount)({account:f}))},icon:a.faExternalLink,children:p("action_view_on_explorer")}),t&&!n&&(0,s.jsx)(l.DropdownMenuItem,{size:"s",onClick:m,icon:a.faSmile,children:p("action_unwrap_sol")}),e.actions?.find((e=>"burn-and-close"===e.name))&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Divider,{}),(0,s.jsx)(l.DropdownMenuItem,{size:"s",onClick:u,icon:a.faFire,variant:"destructive",children:p("action_burn")})]}),e.actions?.find((e=>"close"===e.name))&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Divider,{}),(0,s.jsx)(l.DropdownMenuItem,{size:"s",onClick:()=>i("singleTokenThreeDot"),icon:a.faTrashAlt,variant:"destructive",children:p("action_close_account")})]})]})}},"./src/features/singleToken/constants/chart.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.chartPeriods=t.DEFAULT_CHART_PERIOD=void 0,t.DEFAULT_CHART_PERIOD="1D",t.chartPeriods={"1H":{label:"1H",minutes:60,extraBufferMinutes:61,resolution:"1"},"1D":{label:"1D",minutes:1440,extraBufferMinutes:1455,resolution:"15"},"1W":{label:"1W",minutes:10080,extraBufferMinutes:10140,resolution:"60"},"1M":{label:"1M",minutes:43200,extraBufferMinutes:43440,resolution:"240"},"1Y":{label:"1Y",minutes:525600,extraBufferMinutes:529920,resolution:"3D"}}},"./src/pages/Portfolio/SingleToken/index.tsx":function(e,t,n){var i=n("../../../node_modules/console-browserify/index.js"),s=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var s=Object.getOwnPropertyDescriptor(t,n);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,s)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n("../../../node_modules/react/jsx-runtime.js"),c=r(n("../../../node_modules/react/index.js")),d=n("../../../node_modules/react-i18next/dist/es/index.js"),u=n("../../../node_modules/react-router/esm/react-router.js"),m=n("../../../node_modules/@fortawesome/pro-light-svg-icons/index.js"),f=n("../../../node_modules/@mui/material/index.js"),h=a(n("../../../node_modules/@mui/styles/makeStyles/index.js")),p=n("../../../node_modules/lodash/lodash.js"),x=n("../../libs/foundation-ui/dist/index.js"),g=n("../../libs/shared/dist/components/Receive/index.js"),_=a(n("../../libs/shared/dist/components/TokenAvatar/index.js")),j=n("../../libs/shared/dist/constants/mints.js"),b=n("../../libs/shared/dist/features/activity/index.js"),k=n("../../libs/shared/dist/features/currencies/index.js"),y=n("../../libs/shared/dist/features/currencies/utils/index.js"),v=n("../../libs/shared/dist/features/onramper/index.js"),C=n("../../libs/shared/dist/features/portfolio/index.js"),T=a(n("../../libs/shared/dist/features/portfolio/components/SendModal/index.js")),S=n("../../libs/shared/dist/features/recipientInput/index.js"),E=n("../../libs/shared/dist/features/settings/index.js"),P=n("../../libs/shared/dist/utils/displayPrice.js"),D=n("../../libs/shared/dist/utils/humanDate.js"),A=n("../../libs/shared/dist/utils/truncateMiddle.js"),M=n("../../libs/shared/dist/wallet/index.js"),w=a(n("./src/features/activity/components/ActivityItem/index.js")),L=a(n("./src/features/activity/components/SingleActivity/index.js")),B=a(n("./src/features/singleToken/components/AssociatedAccounts/index.tsx")),O=a(n("./src/features/singleToken/components/Chart/index.tsx")),R=a(n("./src/features/singleToken/components/MarketData/index.tsx")),I=a(n("./src/features/singleToken/components/Socials/index.tsx")),F=a(n("./src/features/singleToken/components/StakingWidget/index.tsx")),W=a(n("./src/features/singleToken/components/TokenAttributes/index.tsx")),N=a(n("./src/features/singleToken/components/TokenSingleMoreOptions/index.tsx")),H=(0,h.default)((e=>({list:{width:"calc(100% + 32px)",left:-16,position:"relative"},groupHeader:{backgroundColor:e.palette.background.modal,color:"rgba(255, 255, 255, 0.4)",paddingBottom:8,paddingLeft:16,paddingTop:8,fontSize:"12px",lineHeight:"14px",fontWeight:400,position:"relative",top:-1},headerRow:{backgroundColor:"inherit",display:"grid",position:"relative",padding:4,gridTemplateColumns:"200px 200px auto 300px 24px",minHeight:"72px",minWidth:"min-content",alignItems:"center"},row:{borderBottom:`1px solid ${e.palette.common.white05}`,"&:hover":{cursor:"pointer"},"&:last-of-type":{borderBottom:0}}})));t.default=()=>{const{t:e,i18n:t}=(0,d.useTranslation)(),n=(0,u.useHistory)(),s=(0,E.useNetwork)(),o=H(),{publicKey:r}=(0,M.useSolflareWallet)(),[a,h]=(0,c.useState)(null),V=(0,u.useRouteMatch)(),{data:U,isLoading:z,actions:$}=(0,C.usePortfolio)(),{data:K,isLoading:G}=(0,C.useTokenMoreInfo)(V.params.id),[q,Y]=(0,c.useState)(null),[Q,X]=(0,c.useState)("none"),{receiveModal:Z,openReceiveModal:J,closeReceiveModal:ee,providedAccount:te,transferModal:ne,openTransferModal:ie,closeTransferModal:se,splTransferModal:oe,splTransferToken:re,closeSplTransferModal:ae,buyModal:le,buyToken:ce,buySource:de,openBuyModal:ue,closeBuyModal:me,sendSource:fe}=(0,C.usePortfolioState)(),{handleTransferTokenClick:he,handleUnwrapTokenAccount:pe,handleCloseTokenAccount:xe,handleBurnTokenAccount:ge}=(0,C.usePortfolioUIActions)($,!0),{loadSignatures:_e,loadLimitTransactions:je,signatures:be,transactions:ke}=(0,b.useActivityTransactions)({layout:"ext"}),ye=(0,c.useCallback)((()=>{n.push("/")}),[n]),ve=(0,k.useCurrentCurrency)(),Ce=(0,y.symbolFormatter)(ve.ticker,ve.symbol),Te=(0,c.useMemo)((()=>U?.tokens?.find((e=>e.mint===V.params.id))||null),[U,V.params.id]),Se=(0,c.useMemo)((()=>Te?(0,C.transformTokenUi)(Te,r||"",ve,"fiat"):null),[Te,ve,r]),Ee=(0,c.useMemo)((()=>(0,p.find)(Te?.accounts,{isAta:!0})?.pubkey||Te?.accounts[0].pubkey),[Te?.accounts]);(0,c.useEffect)((()=>{!z&&ve.symbol!==k.USD&&Te?.price&&Y({price:Te.price.price,priceChange:Te.price.change})}),[Te?.price?.price,Te?.price?.change,ve,z,Te]),(0,c.useEffect)((()=>{const e=setInterval((()=>{Ee&&_e({publicKey:Ee,onlyNewer:!0,limit:3})}),15e3);return()=>clearInterval(e)}),[Ee]),(0,c.useEffect)((()=>{Ee&&_e({publicKey:Ee,limit:3})}),[Ee]),(0,c.useEffect)((()=>{be.length&&je(t.language)}),[be.length]);const Pe=Te?.mint===j.SOL_MINT_ADDRESS,De=Te?.mint===j.WRAPPED_SOL_MINT_ADDRESS,Ae=1===Te?.accounts?.length,Me=!parseFloat(Te?.amount||"0"),we="mainnet"===s.cluster,Le=Te?.actions?.find((e=>"send"===e.name)),Be=we&&!!Te?.onrampTokenId,Oe=Te?.accounts?.find((e=>e.isAta))||Te?.accounts?.[0];if(!(z||Te&&Se))return(0,l.jsx)(u.Redirect,{to:"/"});const Re=!!Se?.marketCap||!!Se?.volume24h||!!Se?.liquidity||!!Se?.volumeChange24h.value||z;return(0,l.jsxs)(l.Fragment,{children:[null!==a&&(0,l.jsx)(L.default,{transaction:a,onBack:()=>{h(null)}}),(0,l.jsx)(x.PageTitle,{left:(0,l.jsx)(x.ActionableIcon,{onClick:ye,icon:m.faArrowLeft,size:"l"}),center:z?(0,l.jsx)(x.Skeleton,{__height:28,__width:128,__marginRight:"auto",__marginLeft:"auto"}):Te?Te.name||(0,A.truncateMiddle)(Te.mint):"",right:(0,l.jsx)(x.DropdownMenu,{disabled:z,trigger:Ae&&(0,l.jsx)(x.ActionableIcon,{disabled:z,icon:m.faEllipsisVertical,size:"l"}),children:Te&&!z?(0,l.jsx)(N.default,{isWrappedSolana:De,isEmptyAccount:Me,onUnwrap:()=>pe(Te,null,ye),onCloseAccount:e=>xe(Te,e),onBurnAccount:()=>ge(Te),defaultPubkey:Oe?.pubkey??"",token:Te}):null})}),(0,l.jsx)(x.PageContent,{overflow:!0,children:(0,l.jsxs)(x.SingleTokenContent,{children:[(0,l.jsxs)(x.HeroSingleToken,{fixedHeight:!0,children:[(0,l.jsx)(x.TokenHeroHeader,{loading:z,onClick:()=>i.log("on token click"),title:q?(0,P.displayPrice)({amount:q.price,displayType:"value",prefix:Ce}):"N/A",subtitle:q?.time&&(0,D.chartDateFormat)(q.time),avatar:(0,l.jsx)(_.default,{src:Se?.logoURI,verified:Te?.verified,size:"m"}),tag:q&&(0,l.jsxs)(x.BalanceChangeTag,{state:"secondary",variant:q.priceChange>=0?"positive":"negative",size:"s",children:[(0,l.jsx)(x.IconV2,{icon:+q.priceChange>=0?m.faArrowUpRight:m.faArrowDownRight,color:"inherit"}),(0,P.displayPrice)({amount:Math.abs(+q.priceChange),displayType:"medium",suffix:"%"})]})}),Se&&"delayed"===Q?(0,l.jsx)(x.Alert,{variant:"warning",title:e("portfolio_warning_chart_data_delayed_title"),message:e("portfolio_warning_chart_data_delayed_message")}):Se&&!Se.verified?(0,l.jsx)(x.Alert,{variant:"warning",title:e("portfolio_warning_unverified_token_title"),message:e("portfolio_warning_unverified_token_message")}):null,(0,l.jsx)(x.ChartWithButtons,{buttons:(0,l.jsxs)(x.ButtonGroup,{justifyContent:"spaceAround",children:[(0,l.jsx)(x.CircleButton,{loading:z,onClick:J,icon:m.faArrowDown,variant:"secondary",children:e("action_receive")}),(0,l.jsx)(x.CircleButton,{onClick:Te?()=>ue(Te,"singleTokenPage"):()=>{},loading:z,disabled:!Be||!we,icon:m.faPlus,variant:"secondary",children:e("action_buy")}),(0,l.jsx)(x.CircleButton,{loading:z,disabled:!Te?.swappable,onClick:()=>{if(!Te)return;let e="",t="";Pe||De?Me?(e=j.USDC_MINT_ADDRESS,t=j.WRAPPED_SOL_MINT_ADDRESS):(e=j.WRAPPED_SOL_MINT_ADDRESS,t=j.USDC_MINT_ADDRESS):Me?(e=j.WRAPPED_SOL_MINT_ADDRESS,t=Te.mint):(e=Te.mint,t=j.WRAPPED_SOL_MINT_ADDRESS),n.push({pathname:"/trade",search:`?from=${e}&to=${t}`,state:{from:"singleToken"}})},icon:m.faArrowsRepeat,variant:"secondary",children:e("action_swap")}),(0,l.jsx)(x.CircleButton,{loading:z,disabled:!Le,onClick:()=>Pe?ie("singleTokenPageButton"):Te?he(Te,"singleTokenPageButton"):void 0,icon:m.faArrowUp,variant:"secondary",children:e("action_send")})]}),children:(0,l.jsx)(O.default,{mint:Te?.mint,currency:ve.ticker?.toLowerCase(),disabled:!Te?.price?.price,isLoading:z,onPriceChange:Y,onChartDataWarning:X})})]}),z||Number(Se?.rawAmount)>0?(0,l.jsxs)(x.NFTStats,{children:[(0,l.jsx)(x.NFTStat,{dataKey:"balance",label:e("table_balance"),isLoading:z,children:(0,l.jsx)(k.DisplayComputedFiatAmountToken,{value:Se?.rawAmount||"0",displayType:"value",symbolText:` ${Se?.symbol??""}`,symbolType:"text"})}),Number(Se?.rawValue)>0?(0,l.jsx)(x.NFTStat,{dataKey:"value",label:e("table_value"),isLoading:z,children:(0,l.jsx)(k.DisplayComputedFiatValue,{value:Se?.rawValue||"0",displayType:"value"})}):null]}):null,Pe?(0,l.jsx)(F.default,{}):void 0,Re?(0,l.jsx)(x.PortfolioWidget,{title:(0,l.jsx)(x.PortfolioWidgetHeader,{title:e("market_data")}),children:(0,l.jsx)(R.default,{marketCap:Se?.marketCap,volume24h:Se?.volume24h,liquidity:Se?.liquidity,volumeChange24h:Se?.volumeChange24h,isLoading:z})}):null,ke&&(0,l.jsx)(x.PortfolioWidget,{title:(0,l.jsx)(x.PortfolioWidgetHeader,{onClick:()=>n.push(`/portfolio/${V.params.id}/activity/${Ee}`),title:e("header_activity"),right:e("action_view_all")}),children:(0,l.jsx)(f.Box,{className:o.list,children:be.slice(0,3).map(((e,t)=>{const n=ke[e.hash];return(0,l.jsx)(f.Box,{className:o.row,onClick:()=>{n.components&&h(n)},children:(0,l.jsx)(w.default,{item:n})},e.hash)}))})}),(0,l.jsx)(x.PortfolioWidget,{title:(0,l.jsx)(x.PortfolioWidgetHeader,{title:e("portfolio_accounts_about")}),children:(0,l.jsxs)(x.MoreInfoContent,{children:[(0,l.jsx)(x.MoreInfoText,{loading:G,title:e("action_info"),text:K?.description??""}),(0,l.jsx)(I.default,{token:Te}),(0,l.jsx)(W.default,{mintAddress:Se?.id,ticker:Se?.symbol,transactionTax:Se?.transferFee,isLoading:z})]})}),Te&&Te?.accounts?.length>1&&!z?(0,l.jsx)(x.PortfolioWidget,{title:(0,l.jsx)(x.PortfolioWidgetHeader,{title:e("portfolio_accounts_title")}),children:(0,l.jsx)(B.default,{token:Te,currencyPrefix:Ce,onTransferTokenClick:he,onBurnAccountClick:ge,onCloseAccountClick:xe})}):null]})}),(ne||oe)&&(0,l.jsx)(S.RecipientInputProvider,{children:(0,l.jsx)(T.default,{onClose:()=>{se(),ae()},pubkey:re?.token?.accounts?.[re?.tokenAccountIndex||0]?.pubkey,providedAccount:te,tSource:fe})}),Z&&!!r&&(0,l.jsx)(g.Receive,{address:r,onClose:()=>ee(),tRoute:"/receivePortfolioItemRoute",tSource:"singleTokenPage"}),le&&!!ce&&(0,l.jsx)(v.OnramperBuyModal,{token:ce,source:de,onCancel:me})]})}},"../../libs/shared/dist/features/featureFlags/singleToken/index.js":function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.logSingleTokenViewOnExplorerClick=t.logSingleTokenDetailsSocialsClick=void 0;const s=i(n("../../libs/shared/dist/utils/featureFlags.js"));t.logSingleTokenDetailsSocialsClick=async(e,t,n,i)=>s.default.c("TokenDetails","SocialsClick",{socialType:e,socialUrl:t,tokenTicker:n,tokenMintAddress:i}),t.logSingleTokenViewOnExplorerClick=async(e,t,n)=>s.default.c("Token","ViewOnExplorer",{tokenTicker:e,tokenMintAddress:t,source:n})}}]);