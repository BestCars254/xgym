# X FITNESS GYM — Website

浜松市天王町のIFBB公認ジム「X FITNESS GYM」の公式サイト。

- **Stack:** React 19 + TypeScript + Vite + Tailwind CSS + React Router
- **Pages:** `/` (ホーム), `/personal` (パーソナルトレーニング), `/contact` (お問い合わせ・無料体験予約フォーム)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

## 1. Inquiry form (Web3Forms)

The `/contact` form submits via [Web3Forms](https://web3forms.com) and emails each
submission (name, phone, email, preferred menu, **preferred date + time slot**, message)
to the gym inbox. It needs a free access key:

1. Go to <https://web3forms.com>, enter **xfitnessgymjp@gmail.com**, and submit.
   Web3Forms emails an **access key** to that address (no account/login required).
2. Paste it into `.env.local`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-real-key-here
   ```
3. Restart `npm run dev`.
4. **For the live site:** add the same variable in Vercel →
   Project → Settings → Environment Variables, then redeploy.

> The access key is tied to the email that created it; that's where submissions land.
> To also receive at iwazaki.xgym@gmail.com, set a "CC" in the Web3Forms dashboard,
> or set up a forwarding rule in Gmail.

## 2. Photos (TODO)

All image slots currently use `<ImagePlaceholder>`. To swap in real photos:

1. Drop image files in `src/assets/` (e.g. `gym-interior.jpg`, `trainer-cristian.jpg`, …).
2. In `src/pages/Home.tsx` and `src/pages/Personal.tsx`, import each image and replace
   the matching `<ImagePlaceholder label="…" … />` with an `<img>` using the same
   `className` (so layout/aspect ratio is preserved), e.g.:
   ```tsx
   import gymInterior from '../assets/gym-interior.jpg';
   // …
   <img src={gymInterior} alt="ジム内観" className="aspect-[4/5] w-full rounded-3xl object-cover" />
   ```

**Photos needed:** gym interior (hero), exterior, machine area, front desk, cardio area,
free-weight area, and portraits of all 4 trainers (上地クリスチャン / 上地ネイア /
イワザキハファエル / 高橋勇気). Currently only photos of one trainer (Rafael) are on hand.

## 3. Deploy to Vercel

```bash
npm i -g vercel       # one-time
vercel login          # interactive (opens browser)
vercel                # first run: link/create the project (preview deploy)
vercel --prod         # production deploy
```

`vercel.json` already routes all paths to `index.html` so `/personal` and `/contact`
work on direct load and refresh. Remember to set `VITE_WEB3FORMS_ACCESS_KEY` in the
Vercel project's Environment Variables before the production deploy.
