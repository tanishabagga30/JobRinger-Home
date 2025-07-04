import React from 'react'

const FeatureBanner = () => {
  return (
    <div className="mb-8 lg:mb-12">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 2xl:gap-5">
              <div className="mx-auto">
                <a
                  className="rounded-sm h-full group flex justify-center relative overflow-hidden hover:opacity-90"
                  href="/search"
                >
                  <div
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          margin: 0,
                          border: "none",
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="/img/banner/banner_3.webp"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
                </a>
              </div>
              <div className="mx-auto">
                <a
                  className="rounded-sm h-full group flex justify-center relative overflow-hidden hover:opacity-90"
                  href="/search"
                >
                  <div
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          margin: 0,
                          border: "none",
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="/img/banner/banner_4.webp"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
                </a>
              </div>
              <div className="mx-auto">
                <a
                  className="rounded-sm h-full group flex justify-center relative overflow-hidden hover:opacity-90"
                  href="/search"
                >
                  <div
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          margin: 0,
                          border: "none",
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="/img/banner/banner_5.webp"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
                </a>
              </div>
            </div>
          </div>
  )
}

export default FeatureBanner
