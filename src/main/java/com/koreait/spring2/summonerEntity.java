package com.koreait.spring2;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class summonerEntity {
    private String accountId;
    private int profileIconId;
    private long revisionDate;
    private String name;//summonername
    private String id;
    private String puuid;
    private long summonerLevel;


}
