package bootstrap;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.typedarrays.Uint8Array;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

public final class JsBridge {
    private JsBridge() {}

    @JSBody(script = "return document.getElementById('game');")
    public static native HTMLCanvasElement gameCanvas();

    @JSBody(params = {"c"}, script = "return c.getContext('2d',{willReadFrequently:true});")
    public static native CanvasRenderingContext2D ctx2d(HTMLCanvasElement c);

    @JSBody(params = {"msg"}, script = "console.log(msg);")
    public static native void log(String msg);

    @JSBody(params = {"msg"}, script = "console.error(msg);")
    public static native void error(String msg);

    @JSBody(params = {"path"}, script = "return window.__hlzResources && window.__hlzResources[path] || null;")
    public static native Uint8Array getResource(String path);

    @JSBody(params = {"path"}, script = "var r=window.__hlzResources&&window.__hlzResources[path]; return !!(r);")
    public static native boolean hasResource(String path);

    @JSBody(params = {"key", "value"}, script = "try{localStorage.setItem('hlz_'+key,value);}catch(e){}")
    public static native void storageSet(String key, String value);

    @JSBody(params = {"key"}, script = "try{return localStorage.getItem('hlz_'+key);}catch(e){return null;}")
    public static native String storageGet(String key);

    @JSBody(params = {"key"}, script = "try{localStorage.removeItem('hlz_'+key);}catch(e){}")
    public static native void storageRemove(String key);

    @JSBody(params = {"path"}, script =
        "var img=new Image(); img.src=path; window.__hlzImg=window.__hlzImg||{}; window.__hlzImg[path]=img; return img;")
    public static native JSObject loadHtmlImage(String path);

    @JSBody(params = {"img"}, script = "return !!(img && img.complete && img.naturalWidth>0);")
    public static native boolean imageReady(JSObject img);

    @JSBody(params = {"img"}, script = "return (img && (img.naturalWidth||img.width))||0;")
    public static native int imageWidth(JSObject img);

    @JSBody(params = {"img"}, script = "return (img && (img.naturalHeight||img.height))||0;")
    public static native int imageHeight(JSObject img);

    @JSBody(params = {"w","h"}, script =
        "var el=document.createElement('canvas');"
      + "el.width=Math.max(1,w|0);"
      + "el.height=Math.max(1,h|0);"
      + "return el;")
    public static native HTMLCanvasElement createCanvas(int w, int h);

    @JSBody(params = {"url"}, script =
        "try{var x=new XMLHttpRequest();x.open('GET',url,false);"
      + "x.overrideMimeType('text/plain; charset=x-user-defined');x.send(null);"
      + "if(x.status>=200&&x.status<300){var s=x.responseText||'';var u8=new Uint8Array(s.length);"
      + "for(var i=0;i<s.length;i++)u8[i]=s.charCodeAt(i)&0xff;return u8;}"
      + "}catch(e){console.error(e);}return null;")
    public static native Uint8Array httpGetBytes(String url);

    /**
     * Synchronously decode PNG/JPEG bytes into a canvas (UPNG for PNG; data-URL Image for others when already cached).
     */
    @JSBody(params = {"bytes", "mime"}, script =
        "try{"
      + "var u8=bytes;"
      + "if(window.UPNG && u8 && u8.length>=8 && u8[0]===0x89 && u8[1]===0x50){"
      + "  var img=UPNG.decode(u8.buffer.slice(u8.byteOffset,u8.byteOffset+u8.byteLength));"
      + "  var rgba=UPNG.toRGBA8(img)[0];"
      + "  var c=document.createElement('canvas'); c.width=img.width; c.height=img.height;"
      + "  var ctx=c.getContext('2d');"
      + "  var id=ctx.createImageData(img.width,img.height);"
      + "  id.data.set(new Uint8ClampedArray(rgba));"
      + "  ctx.putImageData(id,0,0);"
      + "  return c;"
      + "}"
      + "var blob=new Blob([u8],{type:mime||'image/png'});"
      + "var url=URL.createObjectURL(blob);"
      + "var img2=new Image(); img2.src=url;"
      + "var c2=document.createElement('canvas');"
      + "if(img2.complete && img2.naturalWidth){"
      + "  c2.width=img2.naturalWidth; c2.height=img2.naturalHeight;"
      + "  c2.getContext('2d').drawImage(img2,0,0); URL.revokeObjectURL(url); return c2;"
      + "}"
      + "c2.width=1; c2.height=1; c2.__pending=img2; c2.__url=url;"
      + "img2.onload=function(){c2.width=img2.naturalWidth;c2.height=img2.naturalHeight;c2.getContext('2d').drawImage(img2,0,0);"
      + "URL.revokeObjectURL(url); if(window.__hlzNeedRepaint) window.__hlzNeedRepaint();};"
      + "return c2;"
      + "}catch(e){console.error('decodeImage',e); var c3=document.createElement('canvas'); c3.width=1;c3.height=1;return c3;}")
    public static native HTMLCanvasElement decodeImageToCanvas(Uint8Array bytes, String mime);

    @JSBody(params = {"onKeyDown", "onKeyUp", "onPtrDown", "onPtrUp", "onPtrDrag"}, script =
        "window.__hlzInput={"
      + "keyDown:function(k){onKeyDown(k|0);},"
      + "keyUp:function(k){onKeyUp(k|0);},"
      + "ptrDown:function(x,y){onPtrDown(x|0,y|0);},"
      + "ptrUp:function(x,y){onPtrUp(x|0,y|0);},"
      + "ptrDrag:function(x,y){onPtrDrag(x|0,y|0);}"
      + "};"
      + "window.__hlzNeedRepaint=function(){try{if(window.__hlzRepaint)window.__hlzRepaint();}catch(e){}};")
    public static native void installInput(IntConsumer onKeyDown, IntConsumer onKeyUp,
                                          IntIntConsumer onPtrDown, IntIntConsumer onPtrUp, IntIntConsumer onPtrDrag);

    @org.teavm.jso.JSFunctor
    public interface IntConsumer extends JSObject {
        void accept(int v);
    }

    @org.teavm.jso.JSFunctor
    public interface IntIntConsumer extends JSObject {
        void accept(int a, int b);
    }

    @JSBody(params = {"canvas", "rgb", "offset", "scanlength", "x", "y", "w", "h"}, script =
        "var ctx2=canvas.getContext('2d',{willReadFrequently:true});"
      + "var pix=ctx2.getImageData(x|0,y|0,w|0,h|0).data;"
      + "var pi=0;"
      + "for(var row=0;row<(h|0);row++){"
      + "  var dst=(offset|0)+(row*(scanlength|0));"
      + "  for(var col=0;col<(w|0);col++){"
      + "    var r=pix[pi++],g=pix[pi++],b=pix[pi++],a=pix[pi++];"
      + "    rgb[dst+col]=((a<<24)|(r<<16)|(g<<8)|b)|0;"
      + "  }"
      + "}")
    public static native void canvasGetRGB(HTMLCanvasElement canvas, int[] rgb, int offset, int scanlength,
                                           int x, int y, int w, int h);

    @JSBody(params = {"ctx", "rgb", "offset", "scanlength", "x", "y", "w", "h", "processAlpha"}, script =
        "var id=ctx.createImageData(w|0,h|0); var pix=id.data; var pi=0;"
      + "for(var row=0;row<(h|0);row++){"
      + "  var src=(offset|0)+(row*(scanlength|0));"
      + "  for(var col=0;col<(w|0);col++){"
      + "    var p=rgb[src+col]|0;"
      + "    pix[pi++]=(p>>16)&255; pix[pi++]=(p>>8)&255; pix[pi++]=p&255;"
      + "    pix[pi++]=processAlpha?((p>>>24)&255):255;"
      + "  }"
      + "}"
      + "ctx.putImageData(id,x|0,y|0);")
    public static native void ctxDrawRGB(CanvasRenderingContext2D ctx, int[] rgb, int offset, int scanlength,
                                         int x, int y, int w, int h, boolean processAlpha);
}
