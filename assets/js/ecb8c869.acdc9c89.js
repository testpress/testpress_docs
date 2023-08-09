"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[4314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,g=u["".concat(s,".").concat(y)]||u[y]||c[y]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Getting Started",l={unversionedId:"video-embedding/player-sdk/ios-native-sdk/getting-started",id:"video-embedding/player-sdk/ios-native-sdk/getting-started",title:"Getting Started",description:"TPStreamsSDK is a versatile iOS native SDK with support for both DRM (FairPlay) and non-DRM content.",source:"@site/docs/video-embedding/player-sdk/ios-native-sdk/getting-started.md",sourceDirName:"video-embedding/player-sdk/ios-native-sdk",slug:"/video-embedding/player-sdk/ios-native-sdk/getting-started",permalink:"/docs/video-embedding/player-sdk/ios-native-sdk/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"videoEmbeddingSidebar",previous:{title:"iOS Native SDK",permalink:"/docs/category/ios-native-sdk"}},s={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Integration using Swift Package Manager (SPM)",id:"integration-using-swift-package-manager-spm",level:3},{value:"Initializing TPStreamsSDK",id:"initializing-tpstreamssdk",level:3},{value:"Playing a Video with TPStreamsSDK",id:"playing-a-video-with-tpstreamssdk",level:3},{value:"SwiftUI Integration",id:"swiftui-integration",level:4},{value:"UIKit Integration",id:"uikit-integration",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"TPStreamsSDK is a versatile iOS native SDK with support for both DRM (FairPlay) and non-DRM content."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Before integrating TPStreamsSDK into your iOS application, ensure that your project meets the following requirement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimum Deployment Version: iOS 11.4 or later"),(0,r.kt)("li",{parentName:"ul"},"Swift: Version 5.5 or later")),(0,r.kt)("h3",{id:"integration-using-swift-package-manager-spm"},"Integration using Swift Package Manager (SPM)"),(0,r.kt)("p",null,"To add TPStreamsSDK to your Xcode project using Swift Package Manager, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select File > Add Packages in Xcode."),(0,r.kt)("li",{parentName:"ul"},"In the search bar, enter the following URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/testpress/iOSPlayerSDK"),"."),(0,r.kt)("li",{parentName:"ul"},"Select 'iOSPlayerSDK' from the search results. Click Add package button.")),(0,r.kt)("p",null,"Once the package is added, you can start using TPStreamsSDK in your iOS application."),(0,r.kt)("h3",{id:"initializing-tpstreamssdk"},"Initializing TPStreamsSDK"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"application(_:didFinishLaunchingWithOptions:)")," method in your AppDelegate, call ",(0,r.kt)("inlineCode",{parentName:"p"},"TPStreamsSDK.initialize(for: Provider.testpress, withOrgCode:)")," to initialize the SDK with your organization code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class AppDelegate: UIResponder, UIApplicationDelegate {\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        TPStreamsSDK.initialize(for: Provider.testpress, withOrgCode: "YOUR_SUBDOMAIM")\n        return true\n    }\n}\n')),(0,r.kt)("p",null,"Please note that the above code assumes you are using SwiftUI for your application. If you are using a different app architecture, you may need to adapt the integration steps accordingly."),(0,r.kt)("h3",{id:"playing-a-video-with-tpstreamssdk"},"Playing a Video with TPStreamsSDK"),(0,r.kt)("h4",{id:"swiftui-integration"},"SwiftUI Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Instantiate a TPAVPlayer by providing the appropriate assetID and accessToken."),(0,r.kt)("li",{parentName:"ol"},"Embed the TPStreamPlayerView in your SwiftUI view.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    let player = TPAVPlayer(assetID: "YOUR_VIDEO_ID", accessToken: "VIDEO_ACCESS_TOKEN")\n\n    var body: some View {\n        VStack {\n            TPStreamPlayerView(player: player)\n                .frame(height: 240)\n            Spacer()\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"uikit-integration"},"UIKit Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Instantiate a TPAVPlayer with the relevant assetID and accessToken."),(0,r.kt)("li",{parentName:"ol"},"Create an AVPlayerViewController and assign the previously created TPAVPlayer to the player attribute."),(0,r.kt)("li",{parentName:"ol"},"Add the AVPlayerViewController.view to the view hierarchy. This will display the video player within the specified playerContainer view.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class ViewController: UIViewController {\n    @IBOutlet weak var playerContainer: UIView!\n\n    var playerViewController: AVPlayerViewController?\n    var player: TPAVPlayer?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        self.setupPlayerView()\n    }\n\n    func setupPlayerView(){\n        player = TPAVPlayer(assetID: "YOUR_ASSET_ID", accessToken: "VIDEO_ACCESS_TOKEN")\n        playerViewController = AVPlayerViewController()\n        playerViewController?.player = player\n\n        addChild(playerViewController!)\n        playerContainer.addSubview(playerViewController!.view)\n        playerViewController!.view.frame = playerContainer.bounds\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," TPAVPlayer is a wrapper class of AVPlayer that provides built-in support for playing our videos without requiring additional effort. It also supports FairPlay streaming for DRM-protected content."),(0,r.kt)("p",{parentName:"admonition"}," Since TPAVPlayer is a wrapper class of AVPlayer, you can also use the TPAVPlayer with native iOS player to play Testpress Videos.")),(0,r.kt)("p",null,"For a practical implementation and usage of TPStreamsSDK, refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testpress/sample-iOS-app"},"Sample iOS App"),"."))}c.isMDXComponent=!0}}]);