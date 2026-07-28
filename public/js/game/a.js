/** Transpiled from a */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class a extends (JavaRegistry.get("Object") || class {}) {
  static a_f0_Ljava_util_Hashtable_ = new Hashtable();
  /* skip field: private static String[][] a_f1_AALjava_lang_String_ = new a.String[2][]; */
  /* skip field: private static String[][] b_f0_AALjava_lang_String_ = new a.String[2][]; */
  /* skip field: private static String[][] c_f0_AALjava_lang_String_ = new a.String[1][]; */
  /* skip field: private static String[][] d_f0_AALjava_lang_String_ = new a.String[1][]; */
  static a_f2_Ljava_lang_String_ = "Fr";
  static b_f1_Ljava_lang_String_ = "Sec";
  static c_f1_Ljava_lang_String_ = "N7610";
  static d_f1_Ljava_lang_String_ = "Idx";
  static e = "0";
  static a_f3_AI = new Int32Array(3);
  static a_f4_I = 0;
  /* skip field: private static int[][] a_f5_AAI = new a.int[2][]; */
  a(mIDlet) {

        this.a_m6_PLjavax_microedition_midlet_MIDlet_RV;
    
  }
  static a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(string, string2) {

        let n2 = null;
        if (string == null) {
            console.log(" let aStr == null");
            let null = null;
        }
        if (string.length <= 0 || string2 == null) {
            return new a.String[]{string};
        }
        if (string2.length <= 0) {
            return new a.String[]{string};
        }
        let stringArray = null;
        let string3 = string;
        let nArray = new Int32Array(string3.length);
        let nArray2 = new Int32Array(string3.length);
        let n3 = 0;
        let bl2 = false;
        let n4 = 0;
        do {
            n2 = 0;
            let n5 = n4 + string2.length;
            if (n5 <= string3.length && string3.substring(n4, n5).equals) {
                n2 = 1;
            }
            if (n2 != 0) {
                if {
                    bl2 = false;
                    nArray2[n3++] = n4;
                }
                n4 = n5;
                continue;
            }
            if (!bl2) {
                bl2 = true;
                nArray[n3] = n4;
            }
            ++n4;
        } while (n4 < string3.length);
        if {
            nArray2[n3++] = string3.length;
        }
        if (n3 > 0) {
            stringArray = new a.String[n3];
            n2 = 0;
            while (n2 < n3) {
                stringArray[n2] = string.substring(nArray[n2], nArray2[n2]);
                ++n2;
            }
        }
        let stringArray = null;
    
  }
  static a_m1_PLjava_lang_String_RLjava_lang_String_(string) {

        if (string == null || string.length < 32) {
            console.log("let aStr ==null or aStr length < 32");
            let null = null;
        }
        try {
            let object = new bf();
            (object).a_m0_PLjava_lang_String_RAB("a4s3d5f1");
            object = (object).a_m1_PLjava_lang_String_RLjava_lang_String_(string.substring(0, string.length - 32));
            let n2 = 0;
            let n3 = 0;
            while (n3 < (object).length) {
                if (!((object).charAt>= 'a' && (object).charAt<= 'z' || (object).charAt>= 'A' && (object).charAt<= 'Z' || (object).charAt>= '0' && (object).charAt<= '9' || (object).charAt== ';' || (object).charAt== ',')) {
                    n2 = n3;
                    break;
                }
                ++n3;
            }
            object = (object).substring(0, n2);
            if (new bg().a_m4_PLjava_lang_String_RLjava_lang_String_(jEquals(object), string.substring(string.length - 32))) {
                let object = null;
            }
            let null = null;
        }
        catch (exception) {
            let exception2 = exception;
            exception
            let null = null;
        }
    
  }
  static a_m2_PLjava_lang_String_RI(object) {

        let n2 = 0;
        try {
            n2 = Integer.parseInt(object);
        }
        catch (exception) {
            object = exception;
            exception
        }
        let n2 = null;
    
  }
  static a_m3_PABRLjava_lang_String_(byArray) {

        let string = null;
        try {
            string = new a.String(byArray, "utf-8");
        }
        catch (exception) {
            try {
                string = new a.String(byArray, "UTF-8");
            }
            catch (exception2) {
                string = let a.String = null;
            }
        }
        let string = null;
    
  }
  static a_m4_PILjava_lang_String_RALjava_lang_String_(n2, object) {

        try {
            if (a.a_f0_Ljava_util_Hashtable_.isEmpty()) {
                console.log("is empty");
            }
            if (a.a_f0_Ljava_util_Hashtable_.containsKey) {
                object = a.a_f0_Ljava_util_Hashtable_.get;
                if (n2 >= 0 && n2 < (object).size()) {
                    return (object).elementAt;
                }
                let null = null;
            }
            let null = null;
        }
        catch (exception) {
            object = exception;
            exception
            let null = null;
        }
    
  }
  a_m5_PRV() {

        let inputStream = new Object().getClass().getResourceAsStream("/cpid.txt");
        if (inputStream != null) {
            try {
                try {
                    let object = new Int8Array(inputStream.available());
                    inputStream.read(object);
                    object = a.a_m3_PABRLjava_lang_String_;
                    console.log("cpidListStr=" + object);
                    object = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(object, "\n");
                    console.log("splitArray.length=" + (object != null ? (object).length : 0));
                    let n2 = 0;
                    while (n2 < (object != null ? (object).length : 0)) {
                        let stringArray = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(object[n2], ",");
                        console.log("lineArray=" + stringArray.length);
                        console.log("lineArray[0]=" + stringArray[0]);
                        console.log("lineArray[1]=" + stringArray[1]);
                        console.log("lineArray[2]=" + stringArray[2].length + "," + stringArray[2].trim().length);
                        let string = stringArray[0].trim();
                        let object2 = a.a_m1_PLjava_lang_String_RLjava_lang_String_(stringArray[1].trim());
                        let string2 = a.a_m1_PLjava_lang_String_RLjava_lang_String_(stringArray[2].trim());
                        stringArray = new a.String[]{object2, string2};
                        console.log("cpid=" + string + ",code=" + object2 + ",dest=" + string2);
                        if (!a.a_f0_Ljava_util_Hashtable_.containsKey) {
                            object2 = new Vector<a.String[]>();
                            (object2).addElement;
                            a.a_f0_Ljava_util_Hashtable_.put(string, object2);
                            console.log("put.cpid=" + string + ",CodeDestV.size()=" + (object2).size());
                        } else {
                            object2 = a.a_f0_Ljava_util_Hashtable_.get;
                            console.log("old.size()=" + (object2).size());
                            (object2).addElement;
                            console.log("old.size.2()=" + (object2).size());
                            a.a_f0_Ljava_util_Hashtable_.remove;
                            a.a_f0_Ljava_util_Hashtable_.put(string, object2);
                            console.log("put.cpid=" + string + ",old.size()=" + (object2).size());
                            console.log("cpid=" + string + ",cpidHashtable=" + (a.a_f0_Ljava_util_Hashtable_.get).size());
                        }
                        ++n2;
                    }
                }
                catch (exception) {
                    let exception2 = exception;
                    exception
                    try {
                        if (inputStream != null) {
                            inputStream.close();
                        }
                        return;
                    }
                    catch (exception3) {
                        return;
                    }
                }
            }
            catch (throwable) {
                try {
                    if (inputStream != null) {
                        inputStream.close();
                    }
                }
                catch (exception) {}
                let throwable = null;
            }
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
                return;
            }
            catch (exception) {}
        }
    
  }
  a_m6_PLjavax_microedition_midlet_MIDlet_RV(var1_1) {

        block55: {
            try {
                try {
                    var2_3   = var1_1  .getAppProperty("ChannelFirst");
                    if (var2_3   != null) {
                        a.a_f2_Ljava_lang_String_ = var2_3  ;
                    }
                    if ((var2_3   = var1_1  .getAppProperty("ChannelSecond")) != null) {
                        a.b_f1_Ljava_lang_String_ = var2_3  ;
                    }
                    if ((var2_3   = var1_1  .getAppProperty("InterChannel")) != null) {
                        a.d_f1_Ljava_lang_String_ = var2_3  ;
                    }
                    if ((var2_3   = var1_1  .getAppProperty("Term")) != null) {
                        a.c_f1_Ljava_lang_String_ = var2_3  ;
                    }
                    if ((var2_3   = var1_1  .getAppProperty("QQ")) != null) {
                        a.e = var2_3  ;
                    }
                    var1_1  .getAppProperty("GameCenterName");
                    var1_1  .getAppProperty("GameCenterUrl");
                    a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("FreeCode"));
                    a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("FreeDest"));
                    var2_3   = a.a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("SmsCode1"));
                    var3_8 = a.a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("SmsCode2"));
                    var4_14 = a.a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("SmsDest1"));
                    var5_15 = a.a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("SmsDest2"));
                    a.a_f1_AALjava_lang_String_[0] = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var2_3  , ";");
                    a.a_f1_AALjava_lang_String_[1] = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var3_8, ";");
                    a.b_f0_AALjava_lang_String_[0] = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var4_14, ";");
                    a.b_f0_AALjava_lang_String_[1] = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var5_15, ";");
                    var2_3   = var1_1  .getAppProperty("LogoLinkReco");
                    var2_3   = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var2_3  , ";");
                    var3_9 = 0;
                    if ** GOTO lbl37
                    do {
                        a.a_f3_AI[var3_9] = a.a_m2_PLjava_lang_String_RI(var2_3  [var3_9]);
                        ++var3_9;
lbl37:
                        

                        if (var2_3   != null) {
                            if (var2_3  .length > 3) {
                                v0 = 3;
                                continue;
                            }
                            v0 = var2_3  .length;
                            continue;
                        }
                        v0 = 0;
                    } while (var3_9 < v0);
                    var3_10 = var1_1  .getAppProperty("FeeMode");
                    if (var3_10 != null) {
                        a.a_f4_I = a.a_m2_PLjava_lang_String_RI;
                    }
                    var2_3   = a.a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("DoCode"));
                    var1_1   = a.a_m1_PLjava_lang_String_RLjava_lang_String_(var1_1  .getAppProperty("DoDest"));
                    a.c_f0_AALjava_lang_String_[0] = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var2_3  , ";");
                    a.d_f0_AALjava_lang_String_[0] = a.a_m0_PLjava_lang_String_Ljava_lang_String_RALjava_lang_String_(var1_1  , ";");
                    let block55 = null;
                }
                catch (v1) {
                    var2_4 = v1;
                    let var2_5 = 1;
                    if (a.a_f1_AALjava_lang_String_[0] == null || a.b_f0_AALjava_lang_String_[0] == null) {
                        var2_5 = 0;
                    } else if (a.a_f1_AALjava_lang_String_[0].length != a.b_f0_AALjava_lang_String_[0].length) {
                        var2_5 = 0;
                    }
                    if (var2_5 == 0) {
                        a.a_f1_AALjava_lang_String_[0] = null;
                        a.b_f0_AALjava_lang_String_[0] = null;
                        a.a_f1_AALjava_lang_String_[0] = new a.String[2];
                        a.b_f0_AALjava_lang_String_[0] = new a.String[2];
                        a.a_f1_AALjava_lang_String_[0][0] = "62";
                        a.a_f1_AALjava_lang_String_[0][1] = "63";
                        a.b_f0_AALjava_lang_String_[0][0] = "106662267";
                        a.b_f0_AALjava_lang_String_[0][1] = "106662269";
                    }
                    var2_5 = 1;
                    if (a.a_f1_AALjava_lang_String_[1] == null || a.b_f0_AALjava_lang_String_[1] == null) {
                        var2_5 = 0;
                    } else if (a.a_f1_AALjava_lang_String_[1].length != a.b_f0_AALjava_lang_String_[1].length) {
                        var2_5 = 0;
                    }
                    if (var2_5 == 0) {
                        a.a_f1_AALjava_lang_String_[1] = null;
                        a.b_f0_AALjava_lang_String_[1] = null;
                        a.a_f1_AALjava_lang_String_[1] = new a.String[1];
                        a.b_f0_AALjava_lang_String_[1] = new a.String[1];
                        a.a_f1_AALjava_lang_String_[1][0] = "JG";
                        a.b_f0_AALjava_lang_String_[1][0] = "1066170073";
                    }
                    var2_5 = 1;
                    if (a.c_f0_AALjava_lang_String_[0] == null || a.d_f0_AALjava_lang_String_[0] == null) {
                        var2_5 = 0;
                    } else if (a.c_f0_AALjava_lang_String_[0].length != a.d_f0_AALjava_lang_String_[0].length) {
                        var2_5 = 0;
                    }
                    if (var2_5 == 0) {
                        a.c_f0_AALjava_lang_String_[0] = null;
                        a.d_f0_AALjava_lang_String_[0] = null;
                        this.a_m5_PRV();
                    }
                    var2_5 = 0;
                    ** while (var2_5 < 2)
                }
            }
            catch (var1_2) {
                var2_6 = 1;
                if (a.a_f1_AALjava_lang_String_[0] == null || a.b_f0_AALjava_lang_String_[0] == null) {
                    var2_6 = 0;
                } else if (a.a_f1_AALjava_lang_String_[0].length != a.b_f0_AALjava_lang_String_[0].length) {
                    var2_6 = 0;
                }
                if (var2_6 == 0) {
                    a.a_f1_AALjava_lang_String_[0] = null;
                    a.b_f0_AALjava_lang_String_[0] = null;
                    a.a_f1_AALjava_lang_String_[0] = new a.String[2];
                    a.b_f0_AALjava_lang_String_[0] = new a.String[2];
                    a.a_f1_AALjava_lang_String_[0][0] = "62";
                    a.a_f1_AALjava_lang_String_[0][1] = "63";
                    a.b_f0_AALjava_lang_String_[0][0] = "106662267";
                    a.b_f0_AALjava_lang_String_[0][1] = "106662269";
                }
                var2_6 = 1;
                if (a.a_f1_AALjava_lang_String_[1] == null || a.b_f0_AALjava_lang_String_[1] == null) {
                    var2_6 = 0;
                } else if (a.a_f1_AALjava_lang_String_[1].length != a.b_f0_AALjava_lang_String_[1].length) {
                    var2_6 = 0;
                }
                if (var2_6 == 0) {
                    a.a_f1_AALjava_lang_String_[1] = null;
                    a.b_f0_AALjava_lang_String_[1] = null;
                    a.a_f1_AALjava_lang_String_[1] = new a.String[1];
                    a.b_f0_AALjava_lang_String_[1] = new a.String[1];
                    a.a_f1_AALjava_lang_String_[1][0] = "JG";
                    a.b_f0_AALjava_lang_String_[1][0] = "1066170073";
                }
                var2_6 = 1;
                if (a.c_f0_AALjava_lang_String_[0] == null || a.d_f0_AALjava_lang_String_[0] == null) {
                    var2_6 = 0;
                } else if (a.c_f0_AALjava_lang_String_[0].length != a.d_f0_AALjava_lang_String_[0].length) {
                    var2_6 = 0;
                }
                if (var2_6 == 0) {
                    a.c_f0_AALjava_lang_String_[0] = null;
                    a.d_f0_AALjava_lang_String_[0] = null;
                    this.a_m5_PRV();
                }
                var2_6 = 0;
                ** while (var2_6 < 2)
            }
lbl-1000:
            

            {
                a.a_f5_AAI[var2_5] = new Int32Array(a.a_f1_AALjava_lang_String_[var2_5).length];
                var3_11 = 0;
                while (var3_11 < a.a_f1_AALjava_lang_String_[var2_5].length) {
                    a.a_f5_AAI[var2_5][var3_11] = 0;
                    ++var3_11;
                }
                ++var2_5;
                continue;
            }
lbl104:
            

            return;
lbl-1000:
            

            {
                a.a_f5_AAI[var2_6] = new Int32Array(a.a_f1_AALjava_lang_String_[var2_6).length];
                var3_12 = 0;
                while (var3_12 < a.a_f1_AALjava_lang_String_[var2_6].length) {
                    a.a_f5_AAI[var2_6][var3_12] = 0;
                    ++var3_12;
                }
                ++var2_6;
                continue;
            }
lbl154:
            

            let var1_2 = null;
        }
        var2_7 = 1;
        if (a.a_f1_AALjava_lang_String_[0] == null || a.b_f0_AALjava_lang_String_[0] == null) {
            var2_7 = 0;
        } else if (a.a_f1_AALjava_lang_String_[0].length != a.b_f0_AALjava_lang_String_[0].length) {
            var2_7 = 0;
        }
        if (var2_7 == 0) {
            a.a_f1_AALjava_lang_String_[0] = null;
            a.b_f0_AALjava_lang_String_[0] = null;
            a.a_f1_AALjava_lang_String_[0] = new a.String[2];
            a.b_f0_AALjava_lang_String_[0] = new a.String[2];
            a.a_f1_AALjava_lang_String_[0][0] = "62";
            a.a_f1_AALjava_lang_String_[0][1] = "63";
            a.b_f0_AALjava_lang_String_[0][0] = "106662267";
            a.b_f0_AALjava_lang_String_[0][1] = "106662269";
        }
        var2_7 = 1;
        if (a.a_f1_AALjava_lang_String_[1] == null || a.b_f0_AALjava_lang_String_[1] == null) {
            var2_7 = 0;
        } else if (a.a_f1_AALjava_lang_String_[1].length != a.b_f0_AALjava_lang_String_[1].length) {
            var2_7 = 0;
        }
        if (var2_7 == 0) {
            a.a_f1_AALjava_lang_String_[1] = null;
            a.b_f0_AALjava_lang_String_[1] = null;
            a.a_f1_AALjava_lang_String_[1] = new a.String[1];
            a.b_f0_AALjava_lang_String_[1] = new a.String[1];
            a.a_f1_AALjava_lang_String_[1][0] = "JG";
            a.b_f0_AALjava_lang_String_[1][0] = "1066170073";
        }
        var2_7 = 1;
        if (a.c_f0_AALjava_lang_String_[0] == null || a.d_f0_AALjava_lang_String_[0] == null) {
            var2_7 = 0;
        } else if (a.c_f0_AALjava_lang_String_[0].length != a.d_f0_AALjava_lang_String_[0].length) {
            var2_7 = 0;
        }
        if (var2_7 == 0) {
            a.c_f0_AALjava_lang_String_[0] = null;
            a.d_f0_AALjava_lang_String_[0] = null;
            this.a_m5_PRV();
        }
        var2_7 = 0;
        while (var2_7 < 2) {
            a.a_f5_AAI[var2_7] = new Int32Array(a.a_f1_AALjava_lang_String_[var2_7).length];
            var3_13 = 0;
            while (var3_13 < a.a_f1_AALjava_lang_String_[var2_7].length) {
                a.a_f5_AAI[var2_7][var3_13] = 0;
                ++var3_13;
            }
            ++var2_7;
        }
    
  }
  static a_m7_PIRALjava_lang_String_(n2) {

        if (n2 != 1 && n2 != 2) {
            n2 = 2;
        }
        let n3 = 0;
        let n4 = 100000;
        let bl2 = true;
        let n5 = 0;
        while (n5 < a_f5_AAI[n2 - 1].length) {
            if (a_f5_AAI[n2 - 1][n5] <= n4) {
                n3 = n5;
                n4 = a_f5_AAI[n2 - 1][n5];
            }
            if (a_f5_AAI[n2 - 1][n5] != 0) {
                bl2 = false;
            }
            ++n5;
        }
        if {
            let random = new Random();
            n3 = Math.abs(random.nextInt()) % 100 % a_f1_AALjava_lang_String_[n2 - 1].length;
            console.log("Random minId :" + n3);
        }
        if (n3 < 0 || n3 >= a_f1_AALjava_lang_String_[n2 - 1].length) {
            n3 = 0;
        }
        let stringArray = new a.String[2];
        let stringArray2 = stringArray;
        stringArray[0] = a_f1_AALjava_lang_String_[n2 - 1][n3];
        stringArray2[1] = b_f0_AALjava_lang_String_[n2 - 1][n3];
        let nArray = a_f5_AAI[n2 - 1];
        let n6 = n3;
        nArray[n6] = nArray[n6] + 1;
        let stringArray2 = null;
    
  }
  static a_m8_PRLjava_lang_String_() {

        let a.a_f2_Ljava_lang_String_ = null;
    
  }
  static b_m0_PRLjava_lang_String_() {

        let a.b_f1_Ljava_lang_String_ = null;
    
  }
  static c() {

        let a.c_f1_Ljava_lang_String_ = null;
    
  }
  static d() {

        let a.d_f1_Ljava_lang_String_ = null;
    
  }
  static e() {

        let a.e = null;
    
  }
  static a_m9_PRI() {

        let a.a_f4_I = null;
    
  }
  a_m10_PIIRALjava_lang_String_(n2, n3) {

        if (n2 == 0) {
            let null = null;
        }
        try {
            if (c_f0_AALjava_lang_String_[0] != null && --n2 >= 0 && n2 < c_f0_AALjava_lang_String_[0].length) {
                if (c_f0_AALjava_lang_String_[0][n2] != null && d_f0_AALjava_lang_String_[0][n2] != null && c_f0_AALjava_lang_String_[0][n2].length > 0 && d_f0_AALjava_lang_String_[0][n2].length > 0) {
                    let stringArray = new a.String[2];
                    let stringArray2 = stringArray;
                    stringArray[0] = c_f0_AALjava_lang_String_[0][n2];
                    stringArray2[1] = d_f0_AALjava_lang_String_[0][n2];
                    let stringArray2 = null;
                }
                return this.b_m1_PIIRALjava_lang_String_(n2, n3);
            }
            return this.b_m1_PIIRALjava_lang_String_(n2, n3);
        }
        catch (exception) {
            let null = null;
        }
    
  }
  b_m1_PIIRALjava_lang_String_(n2, n3) {

        let string = Integer.toString;
        return a.a_m4_PILjava_lang_String_RALjava_lang_String_(n2, string);
    
  }
}

JavaRegistry.set("a", a);
JavaRegistry.set("a", a);
try { if (typeof a.__clinit === 'function') a.__clinit(); } catch (a.e) { console.warn('clinit a', a.e); }

globalThis.a = a;
