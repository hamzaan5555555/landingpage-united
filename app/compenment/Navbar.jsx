import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Navbaar from "@/app/compenment/Navbaar";
export const Navbar = () => {
  return (
    <div className="w-full h-12 bg-zinc-900 ">
      <div className="flex ">
          <div>
              <Select className="">
                  <SelectTrigger className="w-[120px] text-white bg-zinc-900 ml-3 mt-1 border-black hover:bg-zinc-800">
                      <svg
                          width="17"
                          height="17"
                          className=""
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                          ></path>
                          <path
                              d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                          ></path>
                          <path
                              d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                          ></path>
                          <path
                              d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                          ></path>
                      </svg>
                      <SelectValue className="font-semibold hover:bg-zinc-900" placeholder="ENG" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup className="text-white bg-zinc-800 rounded-2xl">
                          <SelectItem value="apple">Arabe</SelectItem>
                          <SelectItem value="banana">Anglais</SelectItem>
                          <SelectItem value="blueberry">Francais</SelectItem>
                      </SelectGroup>
                  </SelectContent>
              </Select>

          </div>
          <div className="cursor-pointer w-[190px] hover:bg-zinc-800">
              <div className="flex text-white mt-3">
                  <svg width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                          fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                  </svg>
                  <div className="ml-2">
                      <HoverCard>
                          <HoverCardTrigger asChild>
                              <a className="text-white font-semibold text-sm">Sign In</a>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80 bg-zinc-800">
                              <div className="items-center justify-center text-center">
                                  <Button className="font-bold text-sm border border-white text-white bg-zinc-800 hover:bg-zinc-800 py-7 px-[80px] rounded-full ">
                                      Log in
                                  </Button><br/>
                                  <Button className=" font-bold text-sm mt-2 text-white bg-red-600 hover:bg-red-600 py-7 px-[78px] rounded-full ">
                                      Sign Up
                                  </Button>
                              </div>
                          </HoverCardContent>
                      </HoverCard>

                  </div>
              </div>
          </div>


      </div>
<Navbaar/>
    </div>
  )
}
