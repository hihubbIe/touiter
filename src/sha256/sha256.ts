/**
 * // hash content
 * // content must be an uint8 typed array
 * const hash = new Sha256();
 * hash.update(content)
 * // get digest as uint8 typed array
 * const digest = hash.digest();
 * // or get digest as hex string
 * const hex = hash.hexDigest();
 */

 const EXTRA = [-2147483648, 8388608, 32768, 128];

 const SHIFT = [24, 16, 8, 0];
 
 const K = new Uint32Array([
   0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
   0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
   0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
   0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
   0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
   0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
   0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
   0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
 ]);
 
 export class Sha256 {
 
   public start = 0;
   public bytes = 0;
   public hBytes = 0;
 
   public finalized = false;
   public hashed = false;
 
   public lastByteIndex!: number;
   
   public block = 0;
   public blocks = new Array(17).fill(0);
 
   public h = new Uint32Array([
     0x6a09e667,
     0xbb67ae85,
     0x3c6ef372,
     0xa54ff53a,
     0x510e527f,
     0x9b05688c,
     0x1f83d9ab,
     0x5be0cd19
   ]);
 
   private first = false;
 
   public hash() {
     let a = this.h[0];
     let b = this.h[1];
     let c = this.h[2];
     let d = this.h[3];
     let e = this.h[4];
     let f = this.h[5];
     let g = this.h[6];
     let h = this.h[7];
     const blocks = this.blocks;
     let j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
 
     for (j = 16; j < 64; ++j) {
       // rightrotate
       t1 = blocks[j - 15];
       s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
       t1 = blocks[j - 2];
       s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
       blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 ;
     }
 
     bc = b & c;
     for (j = 0; j < 64; j += 4) {
       if (this.first) {
         ab = 704751109;
         t1 = blocks[0] - 210244248;
         h = t1 - 1521486534 ;
         d = t1 + 143694565 ;
         this.first = false;
       } 
       else {
         s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
         s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
         ab = a & b;
         maj = ab ^ (a & c) ^ bc;
         ch = (e & f) ^ (~e & g);
         t1 = h + s1 + ch + K[j] + blocks[j];
         t2 = s0 + maj;
         h = d + t1 ;
         d = t1 + t2 ;
       }
       s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
       s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
       da = d & a;
       maj = da ^ (d & b) ^ ab;
       ch = (h & e) ^ (~h & f);
       t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
       t2 = s0 + maj;
       g = c + t1 ;
       c = t1 + t2 ;
       s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
       s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
       cd = c & d;
       maj = cd ^ (c & a) ^ da;
       ch = (g & h) ^ (~g & e);
       t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
       t2 = s0 + maj;
       f = b + t1 ;
       b = t1 + t2 ;
       s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
       s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
       bc = b & c;
       maj = bc ^ (b & d) ^ cd;
       ch = (f & g) ^ (~f & h);
       t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
       t2 = s0 + maj;
       e = a + t1 ;
       a = t1 + t2 ;
     }
 
     this.h[0] += a;
     this.h[1] += b;
     this.h[2] += c;
     this.h[3] += d;
     this.h[4] += e;
     this.h[5] += f;
     this.h[6] += g;
     this.h[7] += h;
   }
   
   public update(bytes: Uint8Array) {
     if (this.finalized) {
       return;
     }
 
     const nBytes = bytes.length;
     const blocks = this.blocks;
     let ptr = 0;
     let i = 0;
 
     while (ptr < nBytes) {
       if (this.hashed) {
         this.hashed = false;
         blocks[0] = this.block;
         blocks.fill(0);
       }
 
       for (i = this.start; ptr < nBytes && i < 64; ++ptr) {
         blocks[i >> 2] |= bytes[ptr] << SHIFT[i++ & 3];
       }
 
       this.lastByteIndex = i;
       this.bytes += i - this.start;
       if (i >= 64) {
         this.block = blocks[16];
         this.start = i - 64;
         this.hash();
         this.hashed = true;
       } else {
         this.start = i;
       }
     }
 
     if (this.bytes > 4294967295) {
       this.hBytes += this.bytes / 4294967296 << 0;
       this.bytes = this.bytes % 4294967296;
     }
 
     return this;
   }
 
   public finalize() {
     if (this.finalized) {
       return;
     }
     this.finalized = true;
     var blocks = this.blocks, i = this.lastByteIndex;
     blocks[16] = this.block;
     blocks[i >> 2] |= EXTRA[i & 3];
     this.block = blocks[16];
     if (i >= 56) {
       if (!this.hashed) {
         this.hash();
       }
       blocks[0] = this.block;
       blocks.fill(0);
     }
     blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
     blocks[15] = this.bytes << 3;
     this.hash();
   }
 
   public digest() {
     this.finalize();
     const b = new Uint8Array(this.h.byteLength);
     for (let i = 0, ptr = 0; i < this.h.length; i++, ptr += 4) {
       const chunk = this.h[i];
       b[ptr + 0] = (chunk >> 24) & 0xff;
       b[ptr + 1] = (chunk >> 16) & 0xff;
       b[ptr + 2] = (chunk >> 8) & 0xff;
       b[ptr + 3] = chunk & 0xff;
     }
     return b;
   }
 
   public hexDigest() {
     this.finalize();
     return this.h.reduce((hex, chunk) => hex + chunk.toString(16).padStart(8, '0'), '')
   }
 
   public toString() {
     return this.hexDigest();
   }
 }

const hash = new Sha256();

export const hashString = (str: string): string => {
  const result = [];
  for(var i = 0; i < str.length; i+=2)
  {
      result.push(parseInt(str.substring(i, i + 2), 16));
  }
  hash.update(Uint8Array.from(result));
  return hash.hexDigest();
}

export default hashString;
