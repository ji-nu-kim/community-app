import HomeCard from 'components/HomeCard';
import { ICommunity, IUser } from 'interfaces/db';
import Link from 'next/link';
import React from 'react';
import { HomeSectionContainer } from './styles';

interface HomeSectionProps {
  communities: ICommunity[];
  user: IUser | null;
}

function HomeSection({ communities, user }: HomeSectionProps) {
  const countryInfo = user?.country.split(' ');
  const userCategory = user?.Categories?.map(v => v.name);

  return (
    <HomeSectionContainer>
      {/* 유저정보가 없어도 보여지는 카드 */}
      <section className="section-1">
        <h1>
          <span>새로운</span> 커뮤니티를 만나보세요!
        </h1>
        <div className="cards-container">
          {communities.map(community => (
            <Link key={community.id} href={`/community/${community.id}`}>
              <a>
                <HomeCard
                  profilePhoto={community.profilePhoto}
                  categoryName={community.Categories[0].name}
                  country={community.country}
                  communityName={community.communityName}
                />
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* 유저정보가 있을 때 보여지는 카드  */}
      {user && countryInfo && (
        <>
          <section className="section-2">
            <h1>
              <span>우리동네</span> 커뮤니티
            </h1>
            <div className="cards-container">
              {communities.map(
                community =>
                  community.country.includes(countryInfo[2]) && (
                    <Link
                      key={community.id}
                      href={`/community/${community.id}`}
                    >
                      <a>
                        <HomeCard
                          profilePhoto={community.profilePhoto}
                          categoryName={community.Categories[0].name}
                          country={community.country}
                          communityName={community.communityName}
                        />
                      </a>
                    </Link>
                  )
              )}
            </div>
          </section>

          {userCategory && (
            <section className="section-3">
              <h1>
                내가 제일 좋아하는 <span>{userCategory[0]}</span>
              </h1>
              <div className="cards-container">
                {communities.map(
                  community =>
                    userCategory[0] === community.Categories[0].name && (
                      <Link
                        key={community.id}
                        href={`/community/${community.id}`}
                      >
                        <a>
                          <HomeCard
                            profilePhoto={community.profilePhoto}
                            categoryName={community.Categories[0].name}
                            country={community.country}
                            communityName={community.communityName}
                          />
                        </a>
                      </Link>
                    )
                )}
              </div>
            </section>
          )}

          {userCategory && (
            <section className="section-4">
              <h1>
                이번 주말은 <span>{userCategory[2]}</span>
              </h1>
              <div className="cards-container">
                {communities.map(
                  community =>
                    userCategory[2] === community.Categories[0].name && (
                      <Link
                        key={community.id}
                        href={`/community/${community.id}`}
                      >
                        <a>
                          <HomeCard
                            profilePhoto={community.profilePhoto}
                            categoryName={community.Categories[0].name}
                            country={community.country}
                            communityName={community.communityName}
                          />
                        </a>
                      </Link>
                    )
                )}
              </div>
            </section>
          )}
        </>
      )}
    </HomeSectionContainer>
  );
}

export default HomeSection;
