<script>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import gsap from 'gsap';

export default {
  name: "Banner",

  setup() {

    const Data = reactive({
      Menu: '選 單',
      Boy: '盈慶',
      Girl: '沛穎',
      We: '施林婚宴',
      Info: '05月 08日 週日, 2022年 | 彰化市 唯愛庭園',
      Rsip: '邀請函',
      Click: '點擊婚宴出席表',
      Close: '關閉',
      Todolist: '行事曆',
      GoogleMap: '婚宴地點',
      JoinWedding: '婚宴出席表',
      Left: '婚宴邀請函 邀您一同到來！',
      Right: '一起見證我們人生最重要的時刻，',
      Bottom: '一同見證我們人生最重要的時刻！',
    })

    const Loader = ref(true);
    const MenuOpen = ref(false);
    const AudioStatus = ref(true);
    const ShowModal = ref(false);

    const bg = ref(null);
    const We = ref(null);
    const Weare = ref(null);
    const Info = ref(null);
    const Rsip = ref(null);
    const Nav = ref(null);
    const Lefttext = ref(null);
    const Righttext = ref(null);
    const Audio = ref(null);
    const Menu = ref(null);
    const BgInfo = ref(null);
    const Bubble = ref(null);

    onBeforeMount(() => {
      setTimeout(() => (Loader.value = false), 1200);
    });

    onMounted(() => {
      gsap.timeline()
        .from(bg.value, { clipPath: "circle(0% at 50% 50%)", duration: 1, delay: 1 })
        .to(bg.value, { clipPath: "circle(100% at 50% 50%)" });

      gsap.timeline()
        .from(Weare.value, { y: -200, opacity: 0, scale: 5, duration: 1, delay: 2,ease: "Power4.easeOut" })
        .to(Weare.value, { scale:1 });

      gsap.timeline()
        .from(We.value, { y: -200, opacity: 0, scale: 5, duration: 1, delay: 2,ease: "Power4.easeOut" })
        .to(We.value, { scale:1 });

      gsap.timeline()
        .from(Info.value, { opacity: 0, scale: 0, duration: 2, delay: 2, ease: "Elastic.easeOut" })
        .to(Info.value, { scale: 1 });

      gsap.timeline()
        .from(BgInfo.value, { width: "100%", duration: 2, delay: 1.5, ease: "Elastic.easeOut" })
        .to(BgInfo.value, { width: "0%" });

      gsap.timeline()
        .from(Rsip.value, { y: 200, duration: 2, delay: 2, ease: "Elastic.easeOut" })
        .to(Rsip.value, { scale:1 });

      gsap.timeline()
        .from(Nav.value, { y: 20, opacity: 0, delay: 2, ease: "Expo.easeInout" })
        .to(Nav.value, { scale:1 });

      gsap.timeline()
        .from(Lefttext.value, { x: -200, opacity: 0, duration: 1, delay: 2 })
        .to(Lefttext.value, { opacity: 1 });

      gsap.timeline()
        .from(Righttext.value, { x: 200, opacity: 0, duration: 1, delay: 2 })
        .to(Righttext.value, { opacity: 1 });

      gsap.timeline()
        .from(Audio.value, { opacity: 0, scale: 0, duration: 2, delay: 4 })
        .to(Audio.value, { scale:1,rotation:"360" });

      gsap.timeline()
        .from(Menu.value, { y: -200, opacity: 0, duration: 3, delay: 3, ease: "Elastic.easeOut" })
        .to(Menu.value, { opacity: 1 });
      gsap.timeline()
        .from(Bubble.value, { y: -2000,scale: 10, opacity: 0.1, duration: 3, delay: 2, ease: "Elastic.easeOut" })
        .to(Bubble.value, { opacity: 0, scale: 1 });
    });

    function play() {
      document.getElementById('audio').play();
      this.AudioStatus = false;
    }

    function stop() {
      document.getElementById('audio').pause();
    }

    function calndr() {
      let u = navigator.userAgent, 
      isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
      isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      urls = {
        'android':'https://calndr.link/e/JzUSlfiEm4?s=google&openExternalBrowser=1',
        'ios':'https://calndr.link/e/JzUSlfiEm4?s=apple&openExternalBrowser=1',
        'other':'https://calndr.link/e/JzUSlfiEm4?s=apple&openExternalBrowser=1'
      };

      if(isAndroid){
        window.location.href=urls.android;
      } else if(isiOS){
        window.location.href=urls.ios;
      } else{
        window.location.href=urls.other;
      }
    }

    return {
      Bubble,
      BgInfo,
      Menu,
      Audio,
      Lefttext,
      Righttext,
      Nav,
      Rsip,
      Info,
      Weare,
      We,
      bg,
      Data,
      Loader,
      play,
      stop,
      calndr,
      MenuOpen,
      AudioStatus,
      ShowModal
    };
  },
};
</script>

<template>
  <!-- Loading -->
  <transition name="fade" mode="out-in">
    <div 
    v-show="Loader"
    class="loader_bg w-full h-screen z-50 flex justify-center items-center bg-gray-900 absolute overflow-hidden">
      <div class="spinner flex flex-row space-x-1">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
      </div>
    </div>
  </transition>
  <!--  -->
  <div 
  ref="bg" 
  id="banner"
  class="relative w-full h-screen overflow-hidden bg-cover bg-top flex justify-center items-center" 
  style="background-image: url(/banner.jpeg);">
    <!--  -->
    <button 
    ref="Menu" 
    class="absolute top-7 right-7 rounded-lg md:hidden focus:outline-none focus:shadow-outline z-10 font-black text-xs flex justify-center items-center flex-col backdrop-saturate-150 p-3 text-white" 
    @click="MenuOpen = true">
      <svg 
      fill="currentColor" 
      viewBox="0 0 20 20" 
      class="w-6 h-6">
        <path
        fill-rule="evenodd" 
        x-show="MenuOpen = !MenuOpen" 
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" 
        clip-rule="evenodd" 
        fill="#fff"></path>
      </svg>
      {{ Data.Menu }}
    </button>
    <nav 
    ref="Nav"
    :class="{'flex': MenuOpen, 'hidden': !MenuOpen}" 
    class="flex-col pb-4 md:pb-0 md:flex md:flex-row md:absolute md:top-3 items-center justify-center  text-white md:text-md md:text-md w-full fixed h-screen md:h-auto bg-gray-800 md:bg-transparent z-40 transition-all duration-500">
      <button 
      class="rounded-lg flex md:hidden focus:outline-none focus:shadow-outline z-30 absolute top-10 right-10" 
      @click="MenuOpen = !MenuOpen">
        <svg 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        class="w-6 h-6">
          <path 
          x-show="MenuOpen" 
          fill-rule="evenodd" 
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <a 
      class="px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 md:flex hidden justify-center items-center tracking-[3px]" 
      href="javascript:void(0)" 
      onclick="calndr()" 
      style="text-shadow: 1px 1px 3px #666;">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <g style="animation:notify 1s cubic-bezier(.455,.03,.515,.955) both infinite" stroke-width="1.5"><path stroke="#fff" d="M12.29 3.398a5 5 0 00-5 5v2c0 .758-.441 1.505-1.005 2.012a3 3 0 002.005 5.232h8a3 3 0 002.006-5.232c-.564-.507-1.005-1.254-1.005-2.012v-2a5 5 0 00-5-5z"/><path stroke="#fff" stroke-linecap="round" d="M14.68 20.312l-.042.01a9.713 9.713 0 01-4.67-.01"/></g></svg>
      {{ Data.Todolist }}
      </a>
      <a 
      class="md:hidden px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 flex justify-center items-center tracking-[3px] text-xl" 
      href="javascript:void(0)" 
      onclick="calndr()" 
      style="text-shadow: 1px 1px 3px #666;">
        <svg class="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none"><g style="animation:notify 1s cubic-bezier(.455,.03,.515,.955) both infinite" stroke-width="1.5"><path stroke="#fff" d="M12.29 3.398a5 5 0 00-5 5v2c0 .758-.441 1.505-1.005 2.012a3 3 0 002.005 5.232h8a3 3 0 002.006-5.232c-.564-.507-1.005-1.254-1.005-2.012v-2a5 5 0 00-5-5z"/><path stroke="#fff" stroke-linecap="round" d="M14.68 20.312l-.042.01a9.713 9.713 0 01-4.67-.01"/></g></svg>
      {{ Data.Todolist }}
      </a>
      <a 
      class="px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 md:flex hidden  justify-center items-center tracking-[3px]" 
      href="https://goo.gl/maps/BU4xhV5G2dSbqsXq8" 
      style="text-shadow: 1px 1px 3px #666;" 
      target="_blank"> 
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"><g style="animation:slide-right 1s cubic-bezier(.75,.02,.2,1.06) infinite alternate both" stroke-width="1.5"><path stroke="#fff" d="M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z"/><circle cx="12" cy="10" r="2" stroke="#fff"/></g></svg>
      {{ Data.GoogleMap }}
      </a>
      <a 
      class="md:hidden px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-3 text-white hover:text-yellow-300 flex justify-center items-center tracking-[3px] text-xl" 
      href="https://goo.gl/maps/BU4xhV5G2dSbqsXq8" 
      style="text-shadow: 1px 1px 3px #666;" 
      target="_blank"> 
        <svg class="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none"><g style="animation:slide-right 1s cubic-bezier(.75,.02,.2,1.06) infinite alternate both" stroke-width="1.5"><path stroke="#fff" d="M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z"/><circle cx="12" cy="10" r="2" stroke="#fff"/></g></svg>
      {{ Data.GoogleMap }}
      </a>
      <a 
      class="px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 md:flex hidden items-center justify-center cursor-pointer tracking-[3px]" 
      style="text-shadow: 1px 1px 3px #666;" 
      @click="ShowModal = !ShowModal;play()"> 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      {{ Data.JoinWedding }}
      </a>
      <a 
      class="md:hidden px-4 py-3 mt-2 font-black bg-transparent md:mt-0 md:ml-4 text-white hover:text-yellow-300 flex items-center justify-center cursor-pointer tracking-[3px] text-xl" 
      style="text-shadow: 1px 1px 3px #666;" 
      @click="ShowModal = !ShowModal;play()"> 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      {{ Data.JoinWedding }}
      </a>
      <div
      class="absolute bottom-5 md:hidden flex flex-col text-white justify-center items-start text-xs font-black tracking-[3px]">
      {{ Data.Bottom }}
      </div>
    </nav>
    <!--  -->
    <div class="pt-80">
      <h1 
      ref="Weare"
      class="relative flex flex-row text-5xl font-black items-center justify-center text-white" 
      style="text-shadow: 1px 1px 3px #666;">
        {{ Data.Boy }}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
          <g style="animation:pulsate .5s ease-in-out infinite both;transform-origin:center center" stroke-width="1.5"><path stroke="#fff" d="M11.515 6.269l.134.132a.5.5 0 00.702 0l.133-.132A4.44 4.44 0 0115.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 011.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 010 3.316 4.331 4.331 0 01-.954 1.405l-6.36 6.259a.5.5 0 01-.702 0l-6.36-6.259A4.298 4.298 0 014 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 018.401 5c1.168 0 2.288.456 3.114 1.269z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5c.802.304 1.862 1.43 2 2"/></g></svg> 
        {{ Data.Girl }}

        <div  
        ref="Bubble"
        class="absolute -top-40">
          <img class="w-[460px] opacity-20" src="/bubble.png">
        </div>
      </h1>
    
      <h5 
      ref="We"
      class="text-center font-black tracking-[3px] py-3 text-white text-md" 
      style="text-shadow: 1px 1px 3px #666;">
      {{ Data.We }}
      </h5>

      <h5 
      ref="Info"
      class="relative text-center font-black tracking-[3px] py-3 text-white text-md" 
      style="text-shadow: 1px 1px 3px #666;">
      {{ Data.Info }}
<!--       <div 
      ref="BgInfo" 
      class="bg-white w-full h-full absolute top-0 z-30"></div> -->
      </h5>

      <div 
      ref="Rsip"
      class="flex flex-col justify-center items-center py-3">
        <button 
        @click="ShowModal = !ShowModal;play();"
        class="border border-2 border-white rounded py-1 px-4 text-white font-black text-md hover:bg-orange-300 bg-orange-400 animate-bounce w-[90px]">
        {{ Data.Rsip }}
        </button>
        <span
        class="mt-3"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#fff" d="M18.215 13.484a.857.857 0 11-1.098 1.317l-4.594-3.828L7.93 14.8a.857.857 0 11-1.097-1.317l5.131-4.276a.854.854 0 011.12 0l5.132 4.276z" style="animation:slide-20 1s infinite alternate both cubic-bezier(1,-.01,0,.98)"/></svg></span>
        <p
        class="text-white text-sm font-black tracking-[3px]"
        style="text-shadow: 1px 1px 3px #666;">{{ Data.Click }}</p>
      </div>
      <!-- Left text -->
      <div 
      ref="Lefttext"
      class="absolute left-7 md:left-24 lg:left-40 top-40 lg:top-20 text-gray-900 flex-col font-black text-xl" 
      style="direction:ltr; writing-mode:tb-rl;">
        <h3
        class="text-white hidden md:flex" 
        style="text-shadow: 1px 1px 3px #666;  letter-spacing: 0.2em;">
        {{ Data.Left }}
        </h3>
      </div>
      <!-- Right text -->
      <div 
      ref="Righttext"
      class="absolute right-7 md:right-24 lg:right-40 top-40 lg:top-20 text-gray-900 flex-col font-black text-xl" 
      style="direction:ltr; writing-mode:tb-rl;">
        <h3
        class="text-white hidden md:flex" 
        style="text-shadow: 1px 1px 3px #666;  letter-spacing: 0.2em;">
        {{ Data.Right }}
        </h3>
      </div>
    </div>
    <!-- Bubblies -->
    <div class="bubbles opacity-40">
      <img v-for="n in 7" src="/bubble.png">
    </div>
    <!-- Audio -->
    <div 
    ref="Audio"
    class="absolute bottom-20 right-5 cursor-pointer z-20">
      <svg 
      @click="AudioStatus = false;play();"
      v-show="AudioStatus" 
      xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
      </svg>
      <svg 
      @click="AudioStatus = true;stop();"
      v-show="!AudioStatus"
      xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
  <!-- Modal -->
  <div 
  v-if="ShowModal" 
  class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-gray-900 bg-opacity-100 left-0 right-0 top-0 bottom-0 z-50">
    <div 
    class="bg-white rounded-xl shadow-2xl p-2 w-full md:w-1/2 mx-4" 
    @click.away="ShowModal = false;">

      <iframe 
      id="iframe" 
      width="100%" 
      height="370px" 
      src="https://www.surveycake.com/s/naOQQ" 
      allowTransparency="true" 
      frameborder="0"></iframe>

      <div 
      class="text-right space-x-1 mt-1">
        <button 
        @click="ShowModal = !ShowModal;" 
        class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">{{ Data.Close }}</button>
      </div>

    </div>
  </div>
</template>

