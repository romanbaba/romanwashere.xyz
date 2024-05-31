import { Colors } from "@/utils/colors";
import moment from "moment";
import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";
import { Component, Key, ReactNode } from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaScaleBalanced, FaStar } from "react-icons/fa6";

interface RepositoryData {
  key?: Key;
  item?: any;
  htmlURL: Url;
  fullName: string;
  updatedAt: string;
  description: string;
  language: string;
  licenseName?: string;
  stargazersCount: string;
  forksCount: string;
}

export default class Repository extends Component<RepositoryData> {
  constructor(props: RepositoryData) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div
        className="bg-gradient-to-r from-[#151515] to-[#161616] border border-[#262626] transition-all duration-200 rounded-xl p-4 hover:border-[#ccc] hover:-translate-y-1">
        <NextLink href={this.props.htmlURL}>
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between mb-1">
              <h2 className="font-semibold flex items-center gap-x-2"><FaGithub size={20} /> {this.props.fullName}</h2>
              <div className=" text-[#a7a7a7] hidden sm:flex items-center text-sm gap-x-2">
                <div className="flex gap-x-1 items-center">
                  <span className="text-[#a7a7a7] bg-[#222222] px-2 py-1 rounded-full">Updated {moment(this.props.updatedAt).fromNow()}</span>
                </div>
              </div>
            </div>

            <p className="sm:w-9/12">{this.props.description}</p>

            <div className="mt-1 flex justify-between">
              <div className="flex items-center gap-x-2 mt-2">
                <div className="flex items-center gap-x-1">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor:
                    // @ts-ignore
                    Colors[this.props.language]?.color ?? "GRAY",
                  }} />
                  {this.props.language}
                </div>

                {this.props?.licenseName && (
                  <div className="flex items-center justify-center gap-x-1 sm:text-md text-sm">
                    <FaScaleBalanced size={16} className="text-[#ccc]" />
                    {this.props.licenseName}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-x-2 mt-2">
                <div className="flex items-center justify-center gap-x-2">
                  <FaStar className="text-yellow-500" /> <span className="font-semibold">{this.props.stargazersCount}</span>
                </div>

                <div className="flex items-center justify-center gap-x-2">
                  <BiGitRepoForked className="text-[#ccc]" /> <span className="font-semibold">{this.props.forksCount}</span>
                </div>
              </div>
            </div>
          </div>
        </NextLink>
      </div>
    );
  }
}