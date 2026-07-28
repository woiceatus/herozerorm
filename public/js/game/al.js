/** Transpiled from al */
import { sleep, JavaRegistry, jEquals } from '../midp/runtime.js';
import { Image } from '../midp/Image.js';
import { Graphics } from '../midp/Graphics.js';
import { Display } from '../midp/Display.js';
import { Font } from '../midp/Font.js';
import { RecordStore } from '../midp/RecordStore.js';
import { DataInputStream, ByteArrayInputStream } from '../midp/resources.js';

export class al extends (JavaRegistry.get("du") || class {}) {
  a_f0_Ljava_util_Vector_ = null;
  b_f0_Ljava_util_Vector_ = null;
  b_f1_B = null;
  c_f0_B = null;
  d_f0_B = null;
  e = 0;
  c_f1_I = null;
  f = 8;
  d_f1_I = -1;
  static a_f1_Ljava_util_Random_ = new Random();
  al(s2, s3, by2, by3) {

        /*super*/(s2, s3, by2, by3);
        let al2 = this;
        this.b_f1_B = 1;
        al2.c_f1_I = 0;
        al2.d_f0_B = al2.c_f0_B;
        al2.d_f1_I = -1;
        al2.s();
    
  }
  r() {

        this.a_f0_Ljava_util_Vector_ = new Vector(3);
    
  }
  s() {

        this.r();
        this.b_f0_Ljava_util_Vector_ = new Vector(3);
    
  }
  a_m0_PBRV(by2) {

        this.b_f1_B = by2;
        this.c_f1_I = -1;
    
  }
  c_m0_PBRV(by2) {

        this.c_f0_B = this.d_f0_B = by2;
    
  }
  d_m0_PIRV(n2) {

        if (this.c_f1_I >= n2) {
            this.c_f1_I = 0;
        }
    
  }
  a_m1_PLat_RV(at2) {

        let n2 = at2.a_f0_B;
        let al2 = this;
        if (at.a_m3_PBRZ(n2)) {
            for (let i2 = n2 = al2.a_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
                let at3 = al2.a_f0_Ljava_util_Vector_.elementAt;
                if (!at.a_m3_PBRZ) continue;
                at3.a_f2_Z = true;
            }
        }
        this.a_f0_Ljava_util_Vector_.addElement;
    
  }
  b_m0_PBIRV(by2, n2) {

        if (this.b_m1_PBRZ) {
            this.b_f0_Ljava_util_Vector_.addElement(new ak(by2, n2));
        }
    
  }
  a_m2_PBBIRV(by2, by3, n2) {

        if (this.b_m1_PBRZ) {
            this.b_f0_Ljava_util_Vector_.addElement(new cr(by2, by3, n2));
        }
    
  }
  a_m3_PBRZ(by2) {

        if (this.b_m1_PBRZ) {
            this.b_f0_Ljava_util_Vector_.addElement(new bu);
            let true = null;
        }
        let false = null;
    
  }
  a_m4_PBIRZ(by2, n2) {

        if (this.b_m1_PBRZ) {
            this.b_f0_Ljava_util_Vector_.addElement(new bu(by2, n2));
            let true = null;
        }
        let false = null;
    
  }
  b_m1_PBRZ(by2) {

        for (let i2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let at2 = this.b_f0_Ljava_util_Vector_.elementAt;
            if (at2.a_f0_B != by2) continue;
            let false = null;
        }
        let true = null;
    
  }
  t() {

        for (let i2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let at2 = this.b_f0_Ljava_util_Vector_.elementAt;
            if {
                this.c_m1_PLat_RV;
                this.b_f0_Ljava_util_Vector_.removeElementAt;
                continue;
            }
            this.b_m2_PLat_RV;
        }
    
  }
  b_m2_PLat_RV(at2) {

    
  }
  c_m1_PLat_RV(at2) {

    
  }
  c_m2_PRV() {

        if (this.d_f1_I > 0) {
            --this.d_f1_I;
        }
        this.x();
    
  }
  d_m1_PRZ() {

        if (this.b_f1_B == 2 || this.b_f1_B == 5) {
            if (!this.e_m0_PRZ()) {
                this.e_m1_PIRV;
                let true = null;
            }
            this.h_m0_PRV();
        }
        let false = null;
    
  }
  e_m0_PRZ() {

        if (this.j || this.k) {
            let false = null;
        }
        if (!di.a_f4_Lg_.a_m13_PLal_BRZ(this, this.c_f0_B)) {
            this.a_m0_PBRV(1);
            let true = null;
        }
        let false = null;
    
  }
  e_m1_PIRV(n2) {

        this.v();
        this.h = (this.h + d.J[this.c_f0_B] * n2);
        this.i = (this.i + d.K[this.c_f0_B] * n2);
        this.E();
        this.u();
    
  }
  /* skip field: abstract void h_m0_PRV(); */
  u() {

        let g2 = di.a_f4_Lg_;
        for (let by2 = 0; by2 < this.u; by2 = (by2 + 1)) {
            g2.a_f4_AALdu_[this.t][this.s + by2] = this;
            if {
                g2.a_f4_AALdu_[this.t + 1][this.s + by2] = this;
                continue;
            }
            if (!this.j) continue;
            g2.a_f4_AALdu_[this.t][this.s + 1 + by2] = this;
        }
    
  }
  v() {

        let g2 = di.a_f4_Lg_;
        for (let by2 = 0; by2 < this.u; by2 = (by2 + 1)) {
            g2.a_f4_AALdu_[this.t][this.s + by2] = null;
            if {
                g2.a_f4_AALdu_[this.t + 1][this.s + by2] = null;
                continue;
            }
            if (!this.j) continue;
            g2.a_f4_AALdu_[this.t][this.s + 1 + by2] = null;
        }
    
  }
  d_m2_PIIRV(n2, n3) {

        for (let i2 = this.a_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let at2 = this.a_f0_Ljava_util_Vector_.elementAt;
            at2.a_m1_PIIZRV(n2, n3, true);
            if (!at2.a_f2_Z) continue;
            this.a_f0_Ljava_util_Vector_.removeElementAt;
        }
    
  }
  b_m3_PIIZRV(n2, n3, bl2) {

        for (let i2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let at2 = this.b_f0_Ljava_util_Vector_.elementAt;
            at2.a_m1_PIIZRV(n2, n3, bl2);
        }
    
  }
  a_m5_PBLdu_RLdu_(by2, du2) {

        let n2 = null;
        let n3 = this.t + d.K[by2];
        if (n3 < 0 || n3 >= g.d_f2_B) {
            let null = null;
        }
        let g2 = di.a_f4_Lg_;
        for (let i2 = 0; i2 < this.u && (n2 = this.s + d.J[by2] + i2) >= 0 && n2 < g.c_f3_B; ++i2) {
            let du3 = g2.a_f4_AALdu_[n3][n2];
            if (du3 == this || du3 == null || du2 != null && (du2 == null || du3 != du2)) continue;
            let du3 = null;
        }
        let null = null;
    
  }
  f_m0_PRZ() {

        return this.c_m3_PBRZ;
    
  }
  c_m3_PBRZ(by2) {

        let n2 = this.s + d.J[by2];
        let by3 = this.t + d.K[by2];
        if (n2 >= g.c_f3_B || by3 >= g.d_f2_B || n2 < 0 || by3 < 0) {
            let false = null;
        }
        if (!di.a_f4_Lg_.d_m0_PIIRZ(n2, by3)) {
            let false = null;
        }
        let g2 = di.a_f4_Lg_;
        by3 = d.N[by2];
        let by4 = d.O[by2];
        let by5 = d.L[by2];
        let by6 = d.M[by2];
        if (g2.a_m13_PLal_BRZ(this, by4) && g2.a_m13_PLal_BRZ(this, by6)) {
            this.e = by2;
            this.a_m0_PBRV(2);
            this.c_m0_PBRV;
            let true = null;
        }
        if (g2.a_m13_PLal_BRZ(this, by3) && g2.a_m13_PLal_BRZ(this, by5)) {
            this.e = by2;
            this.a_m0_PBRV(2);
            this.c_m0_PBRV;
            let true = null;
        }
        let false = null;
    
  }
  w() {

        if (this.e != 0 && !this.j && !this.k) {
            this.c_m0_PBRV;
            this.e = 0;
        }
    
  }
  b_m4_PBRV(by2) {

        if (di.a_f4_Lg_.a_m13_PLal_BRZ(this, by2)) {
            this.v();
            this.h = (this.h + (d.J[by2] << 4));
            this.i = (this.i + (d.K[by2] << 4));
            this.E();
            this.u();
        }
    
  }
  a_m6_PLal_RZ(al2) {

        let true = null;
    
  }
  b_m5_PBRI(by2) {

        return 0;
    
  }
  a_m7_PRI() {

        return 0;
    
  }
  a_m8_PRB() {

        return 1;
    
  }
  a_m9_PBRI(by2) {

        return 0;
    
  }
  b_m6_PRI() {

        return 0;
    
  }
  a_m10_PLal_IBRZ(al2, n2, by2) {

        let false = null;
    
  }
  a_m11_PLdo_BIZBBZZZRZ(do_, by2, n2, bl2, by3, by4, bl3, bl4, bl5) {

        let false = null;
    
  }
  d_m3_PBRV(by2) {

        this.f = by2;
    
  }
  a_m12_PBRLcd_(by2) {

        let du2 = this.a_m5_PBLdu_RLdu_(by2, null);
        if (du2 != null && du2 instanceof cd && !(du2 instanceof h)) {
            let du2 = null;
        }
        let null = null;
    
  }
  f_m1_PIRV(n2) {

        if (this.d_f1_I > 0) {
            return;
        }
        this.d_f1_I = n2;
        let by2 = (this.f >> 1);
        let al2 = this;
        this.f = by2;
    
  }
  x() {

        if (this.d_f1_I == 0 && !this.j && !this.k) {
            this.d_f1_I = -1;
            let by2 = (this.f << 1);
            let al2 = this;
            this.f = by2;
        }
    
  }
  a_m13_PLal_IBBRV(al2, n2, by2, by3) {

    
  }
  g_m0_PRZ() {

        let true = null;
    
  }
  h_m1_PRZ() {

        let false = null;
    
  }
  c_m4_PIIRV(n2, n3) {

    
  }
  g_m1_PIRV(n2) {

    
  }
  i() {

        let n2 = null;
        let n3 = 0;
        for (let i2 = n2 = this.b_f0_Ljava_util_Vector_.size() - 1; i2 >= 0; --i2) {
            let at2 = this.b_f0_Ljava_util_Vector_.elementAt;
            if (at2 == null) continue;
            at2.a_f2_Z = true;
            this.c_m1_PLat_RV;
            this.b_f0_Ljava_util_Vector_.removeElementAt;
            ++n3;
        }
        return n3 > 0;
    
  }
  a_m14_PBRLjava_util_Vector_(by2) {

        let n2 = null;
        let n3 = null;
        let n4 = null;
        Vector<du> vector = new Vector<du>(4);
        let g2 = di.a_f4_Lg_;
        let n5 = this.s - 4;
        if (n5 < 0) {
            n5 = 0;
        }
        if ((n4 = this.t - 4) < 0) {
            n4 = 0;
        }
        if ((n3 = this.s + 4 + 1) > g2.a_f4_AALdu_[0].length) {
            n3 = g2.a_f4_AALdu_[0].length;
        }
        if ((n2 = this.t + 4) > g2.a_f4_AALdu_.length) {
            n2 = g2.a_f4_AALdu_.length;
        }
        while (n4 < n2) {
            for (let i2 = n5; i2 < n3; ++i2) {
                if (g2.a_f4_AALdu_[n4][i2] == null || g2.a_f4_AALdu_[n4][i2] == this || !(g2.a_f4_AALdu_[n4][i2] instanceof al)) continue;
                vector.addElement(g2.a_f4_AALdu_[n4][i2]);
            }
            ++n4;
        }
        let vector = null;
    
  }
}

JavaRegistry.set("al", al);
JavaRegistry.set("al", al);
try { if (typeof al.__clinit === 'function') al.__clinit(); } catch (e) { console.warn('clinit al', e); }

globalThis.al = al;
