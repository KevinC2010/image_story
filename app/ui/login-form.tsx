import { lusitana } from "@/app/ui/fonts";
import { AtSymbolIcon, KeyIcon, UserIcon } from "@heroicons/react/24/outline";
import {} from "@heroicons/react/20/solid";
import { Button } from "./button";

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <div className="login-wrap">
          <div className="login-html">
            <div className="title">Welcome To VISTO</div>
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>

            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>

            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group relative">
                  <label className="label" htmlFor="email-signin">
                    Email
                  </label>

                  <input
                    className="input"
                    id="email-signin"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-2 top-[38px] h-[25px] w-[25px] -translate-y-1/2 text-white peer-focus:text-white-900" />
                </div>

                <div className="group relative">
                  <label className="label" htmlFor="password-signin">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="input"
                      id="password-signin"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-2 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-white peer-focus:text-white" />
                  </div>
                </div>

                <div className="group">
                  <Button type="submit" className="button">
                    Log in
                  </Button>
                </div>

                <div className="hr"></div>
                <div className="foot-inc">
                  <a href="#forgot">Forgot Password?</a>
                </div>

                <div className="flex h-8 items-end space-x-1">
                  {/* Add form errors here */}
                </div>
              </div>

              <div className="sign-up-htm">
                <div className="group relative">
                  <label className="label" htmlFor="user-signup">
                    Username
                  </label>
                  <input
                    className="input"
                    id="user-signup"
                    type="text"
                    name="user"
                    placeholder="Enter your username"
                    required
                  />

                  <UserIcon className="pointer-events-none absolute left-2 top-[37px] h-[25px] w-[25px] -translate-y-1/2 text-white peer-focus:text-white-900" />
                </div>

                <div className="group relative">
                  <label className="label" htmlFor="email-signup">
                    Email
                  </label>
                  <input
                    className="input"
                    id="email-signup"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-2 top-[38px] h-[25px] w-[25px] -translate-y-1/2 text-white peer-focus:text-white-900" />
                </div>

                <div className="group relative">
                  <label className="label" htmlFor="password-signup">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="input"
                      id="password-signup"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-2 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-white peer-focus:text-white" />
                  </div>
                </div>

                <div className="group relative">
                  <label className="label" htmlFor="repeat-password-signup">
                    Repeat Password
                  </label>
                  <div className="relative">
                    <input
                      className="input"
                      id="repeat-password-signup"
                      type="password"
                      name="repeat-password"
                      placeholder="Repeat password"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-2 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-white peer-focus:text-white" />
                  </div>
                </div>

                <div className="group">
                  <Button type="submit" className="button">
                    Sign Up
                  </Button>
                </div>

                <div className="flex h-8 items-end space-x-1">
                  {/* Add form errors here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
