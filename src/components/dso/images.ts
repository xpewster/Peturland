// Auto-generated file for DSO image imports

import m1 from '../../assets/dso/images/m1.png';
import m10 from '../../assets/dso/images/m10.png';
import m101 from '../../assets/dso/images/m101.jpg';
import m104 from '../../assets/dso/images/m104.jpeg';
import m11 from '../../assets/dso/images/m11.jpg';
import m12 from '../../assets/dso/images/m12.jpg';
import m13 from '../../assets/dso/images/m13.jpg';
import m14 from '../../assets/dso/images/m14.jpg';
import m15 from '../../assets/dso/images/m15.jpg';
import m16 from '../../assets/dso/images/m16.jpg';
import m17 from '../../assets/dso/images/m17.jpg';
import m19 from '../../assets/dso/images/m19.jpg';
import m2 from '../../assets/dso/images/m2.jpg';
import m20 from '../../assets/dso/images/m20.jpg';
import m21 from '../../assets/dso/images/m21.jpg';
import m22 from '../../assets/dso/images/m22.jpg';
import m23 from '../../assets/dso/images/m23.jpg';
import m24 from '../../assets/dso/images/m24.jpg';
import m25 from '../../assets/dso/images/m25.jpg';
import m26 from '../../assets/dso/images/m26.jpg';
import m27 from '../../assets/dso/images/m27.png';
import m28 from '../../assets/dso/images/m28.jpg';
import m29 from '../../assets/dso/images/m29.jpg';
import m3 from '../../assets/dso/images/m3.jpg';
import m30 from '../../assets/dso/images/m30.jpg';
import m31 from '../../assets/dso/images/m31.jpg';
import m32 from '../../assets/dso/images/m32.jpg';
import m33 from '../../assets/dso/images/m33.jpg';
import m34 from '../../assets/dso/images/m34.jpg';
import m35 from '../../assets/dso/images/m35.jpg';
import m36 from '../../assets/dso/images/m36.jpg';
import m37 from '../../assets/dso/images/m37.jpg';
import m38 from '../../assets/dso/images/m38.jpg';
import m39 from '../../assets/dso/images/m39.jpg';
import m4 from '../../assets/dso/images/m4.jpg';
import m42 from '../../assets/dso/images/m42.jpg';
import m45 from '../../assets/dso/images/m45.jpg';
import m5 from '../../assets/dso/images/m5.jpg';
import m51 from '../../assets/dso/images/m51.jpg';
import m57 from '../../assets/dso/images/m57.jpg';
import m6 from '../../assets/dso/images/m6.png';
import m7 from '../../assets/dso/images/m7.png';
import m76 from '../../assets/dso/images/m76.jpg';
import m81 from '../../assets/dso/images/m81.jpg';
import m82 from '../../assets/dso/images/m82.jpeg';
import m9 from '../../assets/dso/images/m9.jpg';
import m97 from '../../assets/dso/images/m97.jpg';

// DSO name to image mapping
export const dsoImages: Record<string, string> = {
  'm1': m1,
  'm10': m10,
  'm101': m101,
  'm104': m104,
  'm11': m11,
  'm12': m12,
  'm13': m13,
  'm14': m14,
  'm15': m15,
  'm16': m16,
  'm17': m17,
  'm19': m19,
  'm2': m2,
  'm20': m20,
  'm21': m21,
  'm22': m22,
  'm23': m23,
  'm24': m24,
  'm25': m25,
  'm26': m26,
  'm27': m27,
  'm28': m28,
  'm29': m29,
  'm3': m3,
  'm30': m30,
  'm31': m31,
  'm32': m32,
  'm33': m33,
  'm34': m34,
  'm35': m35,
  'm36': m36,
  'm37': m37,
  'm38': m38,
  'm39': m39,
  'm4': m4,
  'm42': m42,
  'm45': m45,
  'm5': m5,
  'm51': m51,
  'm57': m57,
  'm6': m6,
  'm7': m7,
  'm76': m76,
  'm81': m81,
  'm82': m82,
  'm9': m9,
  'm97': m97,
};


export function getDsoImage(dsoId: string): string  {
  if (dsoImages[dsoId]) {
    return dsoImages[dsoId];
  }

  const normalizedId = dsoId.toUpperCase();
  for (const [key, value] of Object.entries(dsoImages)) {
    if (key.toUpperCase() === normalizedId) {
      return value;
    }
  }
  return dsoImages['m2'];
}
