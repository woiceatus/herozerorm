/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  javax.microedition.midlet.MIDlet
 */
package rpg;

import javax.microedition.midlet.MIDlet;
import rpg.c;

public class RPGHeroEx
extends MIDlet {
    public static RPGHeroEx a = null;

    protected void startApp() {
        if (a == null) {
            a = this;
            c.a_m0_PRLrpg_c_().c();
            return;
        }
        bq.b_m0_PRV();
        if (c.a_m0_PRLrpg_c_() != null) {
            c.a_m0_PRLrpg_c_().b();
        }
    }

    protected void pauseApp() {
        if (c.a_m0_PRLrpg_c_() != null) {
            c.a_m0_PRLrpg_c_().a_m1_PRV();
        }
    }

    public void destroyApp(boolean bl2) {
        c.f = false;
        this.notifyDestroyed();
    }

    public final void a(String object) {
        try {
            object = this.getAppProperty((String)object);
            if (object != null && ((String)object).trim().length() > 7) {
                this.platformRequest((String)object);
            }
        }
        catch (Exception exception) {
            object = exception;
            exception.printStackTrace();
        }
        this.destroyApp(true);
    }
}

