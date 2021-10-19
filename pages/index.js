import Head from "next/head";
import { Disclosure } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sameday Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between py-5 space-x-4">
            <a href="#!">
              <img
                src="/assets/images/logo-text.png"
                className="img-fluid"
                width="260"
                alt=""
              />
            </a>
            <div className="hidden md:inline-flex items-center space-x-6">
              <div className="inline-flex items-center space-x-10">
                <a
                  href="mailto:support@samedayhealth.com"
                  className="inline-flex items-center"
                >
                  <img
                    src="/assets/images/svg/mail.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  <span className="text-sm text-black ml-2">
                    support@samedayhealth.com
                  </span>
                </a>
                <a
                  href="tel:(310) 697-8126"
                  className="inline-flex items-center"
                >
                  <img
                    src="/assets/images/svg/phone.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  <span className="text-sm text-black ml-2">
                    (310) 697-8126
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-12 lg:py-24 bg-no-repeat bg-bottom bg-cover"
        style={{ backgroundImage: 'url("/assets/images/cover-1.png")' }}
      >
        <div className="container">
          <div className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-between -mt-12 -mx-10">
              <div className="w-full lg:w-7/12 mt-12 px-10">
                <h3 className="text-white display-4 font-bold capitalize mb-6">
                  Discover a new way <br className="hidden lg:block" /> to
                  provide healthcare
                </h3>
                <p className="text-white lead mb-6 ">
                  Join Sameday Health as a nurse in Los Angeles{" "}
                  <br className="hidden lg:block" /> and find new fulfillment in
                  your job.
                </p>
                <button className="btn btn-white inline-flex items-center">
                  <span className="mr-2">About us</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.2425 0.800629L10.3625 1.7L13.0394 4.375H0.5V5.625H13.0394L10.3631 8.30063L11.2425 9.19938L15.4406 5L11.2425 0.800629Z" />
                  </svg>
                </button>
              </div>
              <div className="w-full lg:w-5/12 mt-12 px-10">
                <div className="bg-white flex flex-col p-5 sm:p-8 rounded-lg">
                  <p className="text-dark mb-8 lead font-semibold capitalize ">
                    Compleate this form to apply for the nurse
                  </p>
                  <div className="mb-4">
                    <label className="mb-2">First name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your legal first name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2">Last name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your legal last name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2">Phone Number</label>
                    <div className="input-prepend">
                      <img
                        src="/assets/images/svg/usa.svg"
                        className="input-prepend-img"
                        alt=""
                      />
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <span className="form-check-text capitalize">
                        Agree with{" "}
                        <a className="underline" href="#!">
                          privacy policy
                        </a>
                      </span>
                    </label>
                  </div>
                  <button className="btn btn-primary w-full">
                    Submit application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 lg:pt-24">
        <div className="container">
          <div className="overflow-hidden">
            <div className="flex flex-wrap -mt-12 -mx-4 items-center">
              <div className="w-full lg:w-1/2 mt-12 px-4">
                <p className="text-dark h2 font-bold mb-6 capitalize">
                  Become a nurse at Sameday Health
                </p>
                <ul className="text-dark space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/images/svg/check.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </div>
                    <p className="ml-3">
                      <div className="h6">
                        Play an active role in transforming the healthcare
                        industry
                      </div>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/images/svg/check.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </div>
                    <p className="ml-3">
                      <div className="h6">
                        Provide medical services at people’s homes and make them
                        feel cared for
                      </div>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/images/svg/check.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </div>
                    <p className="ml-3">
                      <div className="h6">
                        Build relationships with the people you treat
                      </div>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/images/svg/check.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </div>
                    <p className="ml-3">
                      <div className="h6">
                        Have autonomy and control over your schedule - you
                        decide your work times
                      </div>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/images/svg/check.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </div>
                    <p className="ml-3">
                      <div className="h6">
                        Receive competitive pay based on your experience level
                      </div>
                    </p>
                  </li>
                </ul>
                <div className="text-dark bg-primary-light p-5 sm:p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      <div className="text-white bg-primary w-10 h-10 inline-flex justify-center items-center rounded">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 18"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21.9851 9.67861L19.6933 10.5127C19.6115 9.35053 19.4718 8.21347 19.2773 7.12461L23.4273 5.7522C23.7752 5.63712 24 5.32601 24 4.95959C24 4.59316 23.7752 4.28201 23.4273 4.16698L12.4139 0.524914C12.147 0.436601 11.853 0.436601 11.5861 0.524914L0.572768 4.16698C0.224813 4.28205 0 4.59316 0 4.95963C0 5.3261 0.224813 5.63722 0.572768 5.75225L4.72207 7.12442C4.61739 7.71097 4.5273 8.32124 4.45394 8.94215C4.4312 9.13499 4.56902 9.30974 4.76182 9.33253C4.77583 9.33417 4.78975 9.33496 4.80353 9.33496C4.97927 9.33496 5.1311 9.20343 5.15219 9.0246C5.21979 8.45244 5.30196 7.88989 5.39674 7.34755L6.51467 7.71725V8.59171C5.95221 8.74626 5.53769 9.26179 5.53769 9.87262C5.53769 10.2409 5.6884 10.5746 5.93126 10.8154C5.75323 11.4664 5.61588 12.2293 5.51979 13.0987C5.27997 12.9616 5.10124 12.8434 4.98175 12.7588C4.9465 12.7338 4.92569 12.6926 4.92602 12.6485C4.93113 11.9542 4.95874 11.249 5.00814 10.5525C5.02188 10.3588 4.876 10.1907 4.68231 10.1769C4.4891 10.1634 4.32049 10.3091 4.30675 10.5028C4.25636 11.214 4.22814 11.9342 4.22289 12.6433C4.22083 12.9171 4.35269 13.1748 4.57544 13.3326C4.7516 13.4573 5.04199 13.6468 5.44811 13.8613C5.38849 14.6226 5.35666 15.4544 5.35291 16.354C5.35179 16.6223 5.53263 16.8565 5.79284 16.9236C6.02313 16.983 6.39635 17.0537 6.86623 17.0537C7.33606 17.0537 7.70928 16.9829 7.93962 16.9235C8.19978 16.8565 8.38063 16.6222 8.3795 16.354C8.37749 15.8634 8.36694 15.3934 8.34824 14.9436C8.8235 15.0633 9.31719 15.1643 9.82312 15.2452C9.83648 15.5214 9.89629 15.8131 10.0003 16.0988C10.1653 16.5521 10.4251 16.9459 10.7321 17.2077C10.9891 17.4268 11.2697 17.5413 11.5352 17.5413C11.6275 17.5413 11.7179 17.5266 11.8049 17.4985C11.815 17.4958 11.825 17.4927 11.835 17.489L17.2689 15.5113C17.2689 15.5113 17.2689 15.5113 17.269 15.5112L17.27 15.5109C17.4834 15.4334 17.6688 15.434 17.8366 15.5127C18.2197 15.6922 18.4487 16.233 18.5294 16.4573C18.5824 16.6046 18.6897 16.7222 18.8316 16.7886C18.9106 16.8257 18.995 16.8443 19.0797 16.8443C19.1474 16.8443 19.2153 16.8324 19.2807 16.8086L20.8942 16.2213C21.0535 16.1633 21.1799 16.0393 21.2411 15.8811C21.3018 15.724 21.2918 15.5487 21.2137 15.4001C20.9875 14.9698 20.6341 14.6486 20.1777 14.4525L20.7393 14.248C20.9217 14.1816 21.0158 13.9799 20.9494 13.7974C20.883 13.6149 20.6812 13.5208 20.4988 13.5873L19.5367 13.9375C19.5875 13.5654 19.5392 13.1287 19.3779 12.6855C19.2223 12.2581 18.9823 11.8838 18.6982 11.623L22.2254 10.3392C22.4346 10.2629 22.902 10.6033 23.159 11.3093C23.2813 11.6453 23.3248 11.9962 23.2785 12.272C23.2444 12.4745 23.1655 12.6167 23.0673 12.6524L21.9671 13.0528C21.7847 13.1192 21.6906 13.321 21.757 13.5034C21.8234 13.6858 22.0249 13.7799 22.2076 13.7136L23.3078 13.3132C23.652 13.1879 23.8941 12.8509 23.9718 12.3886C24.0388 11.9909 23.9847 11.5221 23.8197 11.0687C23.4489 10.0499 22.6431 9.43917 21.9851 9.67861ZM6.86623 9.24721C7.21104 9.24721 7.49159 9.52776 7.49159 9.87258C7.49159 10.2174 7.21109 10.498 6.86623 10.498C6.52137 10.498 6.24082 10.2174 6.24082 9.87258C6.24082 9.52776 6.52137 9.24721 6.86623 9.24721ZM6.86623 16.3506C6.51621 16.3506 6.2314 16.303 6.05655 16.2639C6.07296 13.7135 6.32646 12.1144 6.56618 11.1665C6.6627 11.1889 6.76306 11.2011 6.86623 11.2011C6.96945 11.2011 7.06976 11.1889 7.16628 11.1665C7.40567 12.1133 7.6594 13.7125 7.6759 16.2639C7.50097 16.3031 7.21615 16.3506 6.86623 16.3506ZM7.80111 10.8154C8.04397 10.5746 8.19467 10.2409 8.19467 9.87262C8.19467 9.26179 7.78016 8.74626 7.21775 8.59171V7.9498L11.586 9.3944C11.7195 9.43856 11.8597 9.46064 12 9.46064C12.1401 9.46064 12.2804 9.43856 12.4138 9.3944L15.2616 8.45263C15.446 8.39169 15.546 8.19285 15.4851 8.00844C15.4241 7.82413 15.2253 7.72396 15.0409 7.78504L12.193 8.72681C12.0685 8.76801 11.9313 8.76801 11.8068 8.72681L7.66409 7.35674L10.9282 5.19673C10.9428 5.20423 10.9572 5.21182 10.9723 5.2189C11.2334 5.34096 11.5776 5.40289 11.9954 5.40289C12.4132 5.40289 12.7574 5.34101 13.0185 5.2189C13.3827 5.0486 13.5833 4.7576 13.5833 4.39948C13.5833 3.72841 12.8858 3.20275 11.9954 3.20275C11.105 3.20275 10.4076 3.72841 10.4076 4.39948C10.4076 4.49482 10.4222 4.58529 10.45 4.67009L6.81453 7.07581L0.793503 5.0847C0.714893 5.05868 0.703128 4.99517 0.703128 4.95963C0.703128 4.9241 0.714893 4.86059 0.793503 4.83457L11.8069 1.19246C11.9314 1.15126 12.0686 1.15126 12.1931 1.19246L23.2065 4.83457C23.2851 4.86059 23.2969 4.9241 23.2969 4.95963C23.2969 4.99517 23.2851 5.05868 23.2065 5.0847L16.522 7.29519C16.3377 7.35613 16.2377 7.55502 16.2986 7.73938C16.3596 7.92369 16.5585 8.02382 16.7428 7.96279L18.6034 7.3475C18.7931 8.43435 18.9313 9.60623 19.006 10.763C19.006 10.763 15.9464 11.8766 15.9461 11.8767C15.946 11.8767 15.946 11.8768 15.9459 11.8768L10.5121 13.8544C10.5116 13.8546 10.5112 13.8549 10.5106 13.855C10.228 13.9585 10.0146 14.2051 9.90463 14.5463C9.35399 14.4573 8.81914 14.3435 8.309 14.2072C8.22102 12.8656 8.05128 11.73 7.80111 10.8154ZM11.1107 4.39948C11.1107 4.16646 11.489 3.90588 11.9954 3.90588C12.5018 3.90588 12.8801 4.16651 12.8801 4.39948C12.8801 4.60577 12.4215 4.69976 11.9954 4.69976C11.5693 4.69976 11.1107 4.60577 11.1107 4.39948ZM16.5928 12.6931C16.8056 12.8746 16.9978 13.1714 17.1201 13.5074C17.2424 13.8435 17.286 14.1944 17.2396 14.4701C17.2055 14.6726 17.1266 14.8148 17.0285 14.8505L12.5093 16.4954C12.5593 16.1131 12.5025 15.6721 12.3469 15.2447C12.1913 14.8173 11.9514 14.443 11.6674 14.1822L16.1867 12.5373C16.2845 12.5017 16.4365 12.5599 16.5928 12.6931ZM10.661 15.8583C10.5387 15.5223 10.4951 15.1714 10.5415 14.8956C10.5756 14.6932 10.6544 14.551 10.7525 14.5152C10.7526 14.5152 10.7526 14.5152 10.7526 14.5152L10.7528 14.5151C10.7718 14.5082 10.7928 14.5048 10.8154 14.5048C10.9098 14.5048 11.0329 14.5635 11.1588 14.6709C11.3716 14.8523 11.5638 15.1491 11.6861 15.4852C11.8084 15.8212 11.852 16.1721 11.8056 16.4479C11.7715 16.6504 11.6926 16.7926 11.5945 16.8283C11.4965 16.8641 11.3445 16.8058 11.1883 16.6726C10.9755 16.4912 10.7833 16.1944 10.661 15.8583ZM20.5214 15.6088L19.149 16.1084C19.0267 15.8011 18.806 15.3736 18.4527 15.0805L18.8277 14.944C19.019 14.925 20.0302 14.8636 20.5214 15.6088ZM18.19 12.1118C18.4028 12.2933 18.595 12.5901 18.7173 12.9261C18.9741 13.6319 18.8348 14.1928 18.6259 14.2692L17.9432 14.5177C17.9932 14.1353 17.9364 13.6943 17.7808 13.2669C17.6253 12.8396 17.3854 12.4652 17.1014 12.2044L17.7837 11.956C17.882 11.9204 18.0337 11.9786 18.19 12.1118Z" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-4">
                      <div className="lead font-semibold capitalize">
                        Your qualifications
                      </div>
                    </p>
                  </div>
                  <ul className="text-dark space-y-3 font-semibold mb-6">
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="/assets/images/svg/check.svg"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>
                      <p className="ml-3">
                        <div className="h6">
                          BSc or other diploma from a nursing program
                        </div>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="/assets/images/svg/check.svg"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </div>
                      <p className="ml-3">
                        <div className="h6">Valid nursing license</div>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-12 px-4 text-center">
                <img
                  src="/assets/images/photo-1.png"
                  className="img-fluid rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="overflow-hidden">
            <div className="flex flex-wrap -mt-6 -mx-4 items-center">
              <div className="w-full lg:w-1/2 mt-6 px-4">
                <p className="text-dark h2 font-bold capitalize">
                  We work with
                </p>
              </div>
              <div className="w-full lg:w-1/2 mt-6 px-4 text-center">
                <div className="overflow-hidden">
                  <div className="flex flex-wrap -mt-5 -mx-5 items-center">
                    <div className="w-1/2 sm:w-1/3 mt-6 px-5 text-center">
                      <img
                        src="/assets/images/netflix.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-1/2 sm:w-1/3 mt-6 px-5 text-center">
                      <img
                        src="/assets/images/universal.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-1/2 sm:w-1/3 mt-6 px-5 text-center">
                      <img
                        src="/assets/images/amazon.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-56 lg:py-64 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/assets/images/cover-2.png")' }}
      >
        <div className="container">
          <div className="text-center">
            <a href="#!" className="inline-block text-white">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 20L40 30L25 40V20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="overflow-hidden">
            <div className="flex flex-wrap -mt-6 -mx-4 justify-center">
              <div className="w-full md:w-8/12 lg:w-6/12 mt-6 px-4">
                <p className="text-dark h2 font-bold capitalize text-center mb-10">
                  FAQ
                </p>

                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-dark py-6 px-3 h6 w-full flex items-start border-t border-theme-gray-100">
                        <span className="flex-shrink-0 mt-1">
                          <img
                            src="/assets/images/svg/plus.svg"
                            width="20"
                            height="20"
                            className={`${open ? "rotate-45" : ""}`}
                            alt=""
                          />
                        </span>
                        <span className="ml-3">Is team pricing available?</span>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <p className="text-theme-gray-500 pb-6 px-3">
                          Yes! You can purchase a license that you can share
                          with your entire team.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-dark py-6 px-3 h6 w-full flex items-start border-t border-theme-gray-100">
                        <span className="flex-shrink-0 mt-1">
                          <img
                            src="/assets/images/svg/plus.svg"
                            width="20"
                            height="20"
                            className={`${open ? "rotate-45" : ""}`}
                            alt=""
                          />
                        </span>
                        <span className="ml-3">
                          What are the requirements I need to have?
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <p className="text-theme-gray-500 pb-6 px-3">
                          Yes! You can purchase a license that you can share
                          with your entire team.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-dark py-6 px-3 h6 w-full flex items-start border-t border-theme-gray-100">
                        <span className="flex-shrink-0 mt-1">
                          <img
                            src="/assets/images/svg/plus.svg"
                            width="20"
                            height="20"
                            className={`${open ? "rotate-45" : ""}`}
                            alt=""
                          />
                        </span>
                        <span className="ml-3">
                          Is there a minimum amount of hours?
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <p className="text-theme-gray-500 pb-6 px-3">
                          Yes! You can purchase a license that you can share
                          with your entire team.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-dark py-6 px-3 h6 w-full flex items-start border-t border-theme-gray-100">
                        <span className="flex-shrink-0 mt-1">
                          <img
                            src="/assets/images/svg/plus.svg"
                            width="20"
                            height="20"
                            className={`${open ? "rotate-45" : ""}`}
                            alt=""
                          />
                        </span>
                        <span className="ml-3">
                          Can this role be part time?
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <p className="text-theme-gray-500 pb-6 px-3">
                          Yes! You can purchase a license that you can share
                          with your entire team.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className="w-full border-t border-theme-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 lg:py-24 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/assets/images/cover-3.png")' }}
      >
        <div className="container">
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center -mt-12 -mx-10">
              <div className="w-full md:w-8/12 lg:w-6/12 mt-12 px-10 text-center">
                <h3 className="text-white h2 font-bold capitalize mb-6">
                  Discover a new way to provide healthcare
                </h3>
                <p className="text-white lead mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  ac senectus nec ipsum.
                </p>
                <button className="btn btn-white">Apply now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="container">
          <div className="flex -mt-5 -mx-5 flex-wrap items-center justify-center md:justify-between">
            <div className="w-auto mt-5 px-5">
              <a href="#!">
                <img
                  src="/assets/images/logo.png"
                  width="70"
                  height="70"
                  alt=""
                />
              </a>
            </div>
            <div className="w-auto mt-5 px-5">
              <div className="inline-flex -mt-5 -mx-5 flex-wrap items-center justify-center">
                <div className="w-auto mt-5 px-5">
                  <a href="mailto:support@samedayhealth.com">
                    <span className="text-dark text-sm">
                      support@samedayhealth.com
                    </span>
                  </a>
                </div>
                <div className="w-auto mt-5 px-5">
                  <a href="tel:(310) 697-8126">
                    <span className="text-dark text-sm">(310) 697-8126</span>
                  </a>
                </div>
                <div className="w-auto mt-5 px-5">
                  <a href="#!">
                    <img
                      src="/assets/images/appstore.png"
                      className="img-fluid"
                      width="100"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
